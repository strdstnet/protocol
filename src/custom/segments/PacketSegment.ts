import { BinaryData } from '@strdstnet/utils.binary'

export class PacketSegment {

  constructor(
    // /** @description ID of the packet that has been segmented */
    // public readonly packetId: number,
    /** @description ID of this segment i.e. segment `segmentId` of 10 */
    public readonly segmentId: number,
    /** @description The segment of the original packet data this segment represents*/
    public readonly data: BinaryData,
  ) {}

}
