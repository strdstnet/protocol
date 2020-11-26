import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, PlayStatusType } from '../types'

interface IPlayStatus {
  status: PlayStatusType,
}

export class PlayStatus extends BatchedPacket<IPlayStatus> {

  constructor(p?: IPlayStatus) {
    super(Packets.PLAY_STATUS, [
      { name: 'status', parser: DataType.INT },
    ], p)
  }

}
