import { BinaryData } from '@strdstnet/utils.binary'
import { PacketSegment } from './PacketSegment'

export interface ISegmentCbArgs {
  data: BinaryData,
  packetId: number,
  segmentedId: number,
}
export type SegmentFulfilledCb<T = {}> = (args: ISegmentCbArgs & T) => void

export interface ISegmentedPacket {
  id: number,
  count: number,
  segments: PacketSegment[],
}

export class SegmentHandler<T = {}> {

  protected packets: {
    [k: number]: ISegmentedPacket,
  } = {}

  constructor(protected fulfill: SegmentFulfilledCb<T>) {

  }

  public handle(data: BinaryData, passthrough: T = {} as T) {
    data.readByte() // (byte) PARTIAL_PACKET
    const packetId = data.readByte()
    const segmentedId = data.readShort()
    const segmentsCount = data.readShort()
    const segmentId = data.readShort()
    const segmentData = data.readByteArray(data.length - data.pos)

    if(!this.packets[segmentedId]) this.initPacket(packetId, segmentedId, segmentsCount)

    this.packets[segmentedId].segments.push(new PacketSegment(segmentId, segmentData))

    console.log(`${segmentedId} :: #${segmentId + 1} / ${segmentsCount} (got: ${this.packets[segmentedId].segments.length})`)

    if(this.packets[segmentedId].segments.length >= segmentsCount) {
      this.allSegmentsReceived(segmentedId, passthrough)
    }
  }

  protected initPacket(packetId: number, segmentedId: number, segmentsCount: number): ISegmentedPacket {
    return this.packets[segmentedId] = {
      id: packetId,
      count: segmentsCount,
      segments: [],
    }
  }

  protected allSegmentsReceived(segmentedId: number, passthrough: T) {
    const packet = this.packets[segmentedId]
    const orderedSegments = packet.segments.sort((a, b) => a.segmentId - b.segmentId)

    const data = new BinaryData()
    // data.writeByte(packet.id)

    for(const segment of orderedSegments) {
      data.writeByteArray(segment.data, false)
    }

    delete this.packets[segmentedId]

    data.pos = 0
    this.fulfill.call(null, {
      data,
      segmentedId,
      packetId: packet.id,
      ...passthrough,
    })
  }

}