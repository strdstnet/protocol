import { BinaryData } from '@strdstnet/utils.binary'
import { DisconnectionNotification, PacketBatch } from './bedrock'
import { PartialPacket, UnknownBundledPacket } from './custom'
import { BPacket, BundledPacket, ConnectedPing, ConnectedPong, ConnectionRequest, ConnectionRequestAccepted, NewIncomingConnection, PacketBundle } from './raknet'
import { IBundledPacket, Packets, Props } from './types'

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

/**
 * @return [PacketBundle[], sequenceNumber, splitId]
 */
export function bundlePackets(packets: Array<BundledPacket<any>>, _sequenceNumber = 0, _lastSplitId = -1, mtuSize: number): [PacketBundle[], number, number] {
  let sequenceNumber = _sequenceNumber
  let lastSplitId = _lastSplitId

  // IP header size (20 bytes) + UDP header size (8 bytes) + RakNet weird (8 bytes) + datagram header size (4 bytes) + max encapsulated packet header size (20 bytes)
  const maxLength = mtuSize - 60

  const bundles: PacketBundle[] = []
  for(const packet of packets) {
    const packetData = packet.encode()

    if(packetData.length > maxLength) {
      const dataParts = packetData.split(maxLength)
      const splitId = ++lastSplitId % 65536

      for(const [idx, dataPart] of dataParts.entries()) {
        const partial = new PartialPacket(packet.id)
        partial.props = Object.assign({}, packet.props)
        partial.props.hasSplit = true
        partial.props.splitId = splitId
        partial.props.splitCount = dataParts.length
        partial.props.splitIndex = idx

        partial.encodeBundleHeader(dataPart)

        bundles.push(new PacketBundle({
          sequenceNumber: ++sequenceNumber,
          packets: [partial],
        }))
      }
    } else {
      packet.encodeBundleHeader(packetData)
      bundles.push(new PacketBundle({
        sequenceNumber: ++sequenceNumber,
        packets: [packet],
      }))
    }
  }
  return [bundles, sequenceNumber, lastSplitId]
}
