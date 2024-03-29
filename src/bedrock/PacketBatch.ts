import { UnknownBatchedPacket } from '../custom/UnknownBatchedPacket'
import { ParserType } from '../Packet'
import { BPacketOpt, BundledPacket } from '../raknet/BundledPacket'
import { BatchedPacket } from './BatchedPacket'
import { ChangeDimension } from './ChangeDimension'
import { ChunkRadiusUpdated } from './ChunkRadiusUpdated'
import { Login } from './Login'
import { PacketViolationWarning } from './PacketViolationWarning'
import { PlayStatus } from './PlayStatus'
import { ResourcePacksInfo } from './ResourcePacksInfo'
import { ResourcePacksResponse } from './ResourcePacksResponse'
import { SetTitle } from './SetTitle'
import { StartGame } from './StartGame'
import { Text } from './Text'
import { Transfer } from './Transfer'
import { MovePlayer } from './MovePlayer'
import { CommandRequest } from './CommandRequest'
import { Interact } from './Interact'
import { PlayerAction } from './PlayerAction'
import { Animate } from './Animate'
import { EntityFall } from './EntityFall'
import { LevelSound } from './LevelSound'
import { Emote } from './Emote'
import { ContainerClose } from './ContainerClose'
import { ContainerTransaction } from './ContainerTransaction'
import { EntityEquipment } from './EntityEquipment'
import { EntityAnimation } from './EntityAnimation'
import { Respawn } from './Respawn'
import { TickSync } from './TickSync'
import { RequestChunkRadius } from './RequestChunkRadius'
import { Packets } from '../types'
import { BinaryData } from '@strdstnet/utils.binary'
import { FormResponse } from './FormResponse'
import { BlockPickRequest } from './BlockPickRequest'

interface IPacketBatch {
  packets: Array<BatchedPacket<any>>,
}

export class PacketBatch extends BundledPacket<IPacketBatch> {

  private static PID_MASK = 0x3ff
  private static SENDER_SUBCLIENT_ID_SHIFT = 0x0A
  private static RECIPIENT_SUBCLIENT_ID_SHIFT = 0x0C

  private static senderSubId = 0
  private static recipientSubId = 0

  constructor(p?: BPacketOpt<IPacketBatch>) {
    super(Packets.PACKET_BATCH, [
      {
        parser({ type, data, props }) {
          if(type === ParserType.DECODE) {
            props.packets = []

            const buffer = BinaryData.inflate(data.readRemaining())

            while(!buffer.feof) {
              const length = buffer.readUnsignedVarInt()
              const buf = new BinaryData(buffer.read(length))

              const header = buf.readUnsignedVarInt()
              const packetId = header & PacketBatch.PID_MASK

              let packet: BatchedPacket<any> | null = null
              // TODO: Make automatic, somehow
              switch(packetId) {
                case Packets.LOGIN:
                  packet = new Login()
                  break
                case Packets.PLAY_STATUS:
                  packet = new PlayStatus()
                  break
                case Packets.TRANSFER:
                  packet = new Transfer()
                  break
                case Packets.CHANGE_DIMENSION:
                  packet = new ChangeDimension()
                  break
                case Packets.PACKET_VIOLATION_WARNING:
                  packet = new PacketViolationWarning()
                  break
                case Packets.SET_TITLE:
                  packet = new SetTitle()
                  break
                case Packets.RESOURCE_PACKS_INFO:
                  packet = new ResourcePacksInfo()
                  break
                case Packets.RESOURCE_PACKS_RESPONSE:
                  packet = new ResourcePacksResponse()
                  break
                case Packets.START_GAME:
                  packet = new StartGame()
                  break
                case Packets.REQUEST_CHUNK_RADIUS:
                  packet = new RequestChunkRadius()
                  break
                case Packets.CHUNK_RADIUS_UPDATED:
                  packet = new ChunkRadiusUpdated()
                  break
                case Packets.TEXT:
                  packet = new Text()
                  break
                case Packets.MOVE_PLAYER:
                  packet = new MovePlayer()
                  break
                case Packets.COMMAND_REQUEST:
                  packet = new CommandRequest()
                  break
                case Packets.INTERACT:
                  packet = new Interact()
                  break
                case Packets.PLAYER_ACTION:
                  packet = new PlayerAction()
                  break
                case Packets.ANIMATE:
                  packet = new Animate()
                  break
                case Packets.ENTITY_FALL:
                  packet = new EntityFall()
                  break
                case Packets.LEVEL_SOUND:
                  packet = new LevelSound()
                  break
                case Packets.EMOTE:
                  packet = new Emote()
                  break
                case Packets.CONTAINER_CLOSE:
                  packet = new ContainerClose()
                  break
                case Packets.CONTAINER_TRANSACTION:
                  packet = new ContainerTransaction()
                  break
                case Packets.ENTITY_EQUIPMENT:
                  packet = new EntityEquipment()
                  break
                case Packets.ENTITY_ANIMATION:
                  packet = new EntityAnimation()
                  break
                case Packets.RESPAWN:
                  packet = new Respawn()
                  break
                case Packets.TICK_SYNC:
                  packet = new TickSync()
                  break
                case Packets.FORM_RESPONSE:
                  packet = new FormResponse()
                  break
                case Packets.BLOCK_PICK_REQUEST:
                  packet = new BlockPickRequest()
                  break
                default:
                  packet = new UnknownBatchedPacket(packetId, [])
              }

              if(packet) {
                packet.parse(buf)
                props.packets.push(packet)
              }
            }
          } else {
            const uncompressed = new BinaryData()

            if(!Array.isArray(props.packets)) {
              console.log(props)
              throw new Error('wot')
            }

            for(const packet of props.packets) {
              const packetData = new BinaryData()

              packetData.writeUnsignedVarInt(
                packet.id |
                (PacketBatch.senderSubId << PacketBatch.SENDER_SUBCLIENT_ID_SHIFT) |
                (PacketBatch.recipientSubId << PacketBatch.RECIPIENT_SUBCLIENT_ID_SHIFT),
              )
              packetData.append(packet.encode().toBuffer())

              uncompressed.writeUnsignedVarInt(packetData.length)
              uncompressed.append(packetData.toBuffer())
            }

            data.append(BinaryData.deflate(uncompressed.toBuffer()).toBuffer())
          }
        },
      },
    ], {
      ...BundledPacket.defaultProps,
      ...p,
    })
  }

}
