import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface ISetHealth {
  health: number,
}

export class SetHealth extends BatchedPacket<ISetHealth> {

  constructor(p?: ISetHealth) {
    super(Packets.SET_HEALTH, [
      { name: 'health', parser: DataType.VARINT },
    ], p)
  }

}
