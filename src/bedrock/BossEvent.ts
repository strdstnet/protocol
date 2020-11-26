import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { DataType, Packets, BossEventType } from '../types'

interface IBossEvent {
  type: BossEventType,
  bossRuntimeId: bigint,
  playerRuntimeId?: bigint,
  title?: string,
  health?: number,
  colour?: number,
  overlay?: number,
}

export class BossEvent extends BatchedPacket<IBossEvent> {

  constructor(p?: IBossEvent) {
    super(Packets.BOSS_EVENT, [
      { name: 'bossRuntimeId', parser: DataType.U_VARLONG },
      { name: 'type', parser: DataType.U_VARINT },
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            switch(props.type) {
              case BossEventType.REGISTER_PLAYER:
              case BossEventType.UNREGISTER_PLAYER:
                data.writeUnsignedVarLong(props.playerRuntimeId as bigint)
                break
              case BossEventType.SHOW:
                data.writeString(props.title as string)
                data.writeFloat(props.health as number)
              case BossEventType.UNKNOWN:
                data.writeLShort(0)
              case BossEventType.SET_TEXTURE:
                data.writeUnsignedVarInt(props.colour as number)
                data.writeUnsignedVarInt(props.overlay as number)
                break
              case BossEventType.SET_HEALTH:
                data.writeFloat(props.health as number)
                break
              case BossEventType.SET_TITLE:
                data.writeString(props.title as string)
                break
              default:
                throw new Error(`Unsupported BossEventType: ${props.type}`)
            }
          } else {
            throw new Error(`DECODE not implemented`)
          }
        },
      },
    ], p)
  }

}
