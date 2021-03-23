import { BinaryData } from '@strdstnet/utils.binary'
import { Packet } from '../../Packet'
import { Packets } from '../../types'

export class PacketSegmenter {

  /**
    @description Number of bytes that a single segment header occupies

    PARTIAL_PACKET (byte, 1)  
    packet id (byte, 1)  
    segmented id (short, 2)  
    segment count (short, 2)  
    segment id (short, 2)
  */
  public static readonly HEADER_BYTES = 8

  public static LAST_SEGMENTED_ID = 0

  public static segment(packet: Packet<any>, mtuSize: number): BinaryData[] {
    const packetData = packet.encode()

    const data: BinaryData[] = []

    const segmentedId = ++this.LAST_SEGMENTED_ID

    const maxLength = mtuSize - 60 - this.HEADER_BYTES
    console.log('maxlength:', maxLength, ' length:', packetData.length, ' id:', segmentedId)
    if(packetData.length > maxLength) {
      const dataParts = packetData.split(maxLength)

      for(const [idx, dataPart] of dataParts.entries()) {
        const bd = new BinaryData()
        bd.writeByte(Packets.PARTIAL_PACKET)
        bd.writeByte(packet.id)
        bd.writeShort(segmentedId)
        bd.writeShort(dataParts.length)
        bd.writeShort(idx)
        bd.writeByteArray(dataPart, false)

        data.push(bd)
      }
    } else {
      data.push(packetData)
    }

    console.log(`Segmented into ${data.length} parts`)

    return data
  }

}
