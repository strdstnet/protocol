import { Packet, ParserType, PacketProps } from '../Packet'
import { BPacket, BundledPacket } from './BundledPacket'
import { BitFlag, IBundledPacket, Packets, DataType, Props } from '../types'
import { BinaryData } from '@strdstnet/utils.binary'
import { PartialPacket } from '../custom/PartialPacket'
import { ConnectionRequest } from './ConnectionRequest'
import { ConnectionRequestAccepted } from './ConnectionRequestAccepted'
import { NewIncomingConnection } from './NewIncomingConnection'
import { ConnectedPing } from './ConnectedPing'
import { ConnectedPong } from './ConnectedPong'
import { PacketBatch } from '../bedrock/PacketBatch'
import { DisconnectionNotification } from '../bedrock/DisconnectionNotification'
import { UnknownBundledPacket } from '../custom/UnknownBundledPacket'

export interface IPacketBundle {
  sequenceNumber: number,
  packets: Array<BundledPacket<any>>,
}

type PacketBundleDecode = PacketProps<IPacketBundle> & {
  flags: number,
}

export class PacketBundle extends Packet<IPacketBundle> {

  constructor(p?: IPacketBundle, flags: number = BitFlag.Valid) {
    super(flags, [
      { name: 'sequenceNumber', parser: DataType.L_TRIAD },
      {
        parser({ type, props, data }) {
          if(type === ParserType.DECODE) {
            props.packets = parseBundledPackets(data)
          } else {
            for(const packet of props.packets) {
              data.append(encodeBundledPacket(packet).buf)
            }
          }
        },
      },
    ], p)
  }

  public decode(data: BinaryData): PacketBundleDecode {
    super.parse(data)

    return {
      ...(this.props),
      id: this.id,
      flags: this.id,
    }
  }

}

export function decodeBundledPacket<T extends IBundledPacket = BPacket<any>>(data: BinaryData): [T, number] {
  const flags = data.readByte()
  const length = Math.ceil(data.readShort() / 8)
  const props = {
    id: 0,
    reliability: (flags & 0xe0) >> 5,
    hasSplit: (flags & 0x10) > 0,
    messageIndex: 0,
    sequenceIndex: 0,
    orderIndex: 0,
    orderChannel: 0,
    splitCount: 0,
    splitId: 0,
    splitIndex: 0,
  }

  if(BundledPacket.isReliable(props.reliability)) props.messageIndex = data.readLTriad()

  if(BundledPacket.isSequenced(props.reliability)) props.sequenceIndex = data.readLTriad()

  if(BundledPacket.isSequencedOrOrdered(props.reliability)) {
    props.orderIndex = data.readLTriad()
    props.orderChannel = data.readByte()
  }

  if(props.hasSplit) {
    props.splitCount = data.readInt()
    props.splitId = data.readShort()
    props.splitIndex = data.readInt()
  }

  return [(props as unknown as T), length]
}

export function parseBundledPackets(data: BinaryData): Array<BundledPacket<any>> {
  const packets: Array<BundledPacket<any>> = []

  while(!data.feof) {
    const [props, length] = decodeBundledPacket(data)

    const posBefore = data.pos

    const packetId = data.buf[data.pos]

    let packet: BundledPacket<any> | null = null
    if(props.hasSplit && props.splitIndex > 0) {
      packet = new PartialPacket(packetId)
    } else {
      switch(packetId) {
        case Packets.CONNECTION_REQUEST:
          packet = new ConnectionRequest()
          break
        case Packets.CONNECTION_REQUEST_ACCEPTED:
          packet = new ConnectionRequestAccepted()
          break
        case Packets.NEW_INCOMING_CONNECTION:
          packet = new NewIncomingConnection()
          break
        case Packets.CONNECTED_PING:
          packet = new ConnectedPing()
          break
        case Packets.CONNECTED_PONG:
          packet = new ConnectedPong()
          break
        case Packets.PACKET_BATCH:
          packet = new PacketBatch()
          break
        case Packets.DISCONNECTION_NOTIFICATION:
          packet = new DisconnectionNotification()
          break
        default:
          packet = new UnknownBundledPacket(packetId)
      }
    }

    packet.props = props

    if(props.hasSplit) {
      packet.data = data.readByteArray(length)
    } else {
      packet.decode(new BinaryData(data.read(length)), props)
    }

    packets.push(packet)

    data.pos = posBefore + length
  }

  return packets
}

export function encodeBundledPacket(packet: BundledPacket<Props>): BinaryData {
  const data = new BinaryData()

  const packetData = packet.data || packet.encode(packet.props)

  packet.encodeBundleHeader(packetData, data)

  return packet.data
}
