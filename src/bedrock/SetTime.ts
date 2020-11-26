import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface ISetTime {
  time: number,
}

export class SetTime extends BatchedPacket<ISetTime> {

  constructor(p?: ISetTime) {
    super(Packets.SET_TIME, [
      { name: 'time', parser: DataType.VARINT },
    ], p)
  }

}
