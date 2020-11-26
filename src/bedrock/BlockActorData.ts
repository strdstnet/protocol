import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IBlockActorData {
  x: number,
  y: number,
  z: number,
  namedTag: string,
}

export class BlockActorData extends BatchedPacket<IBlockActorData> {

  constructor(p?: IBlockActorData) {
    super(Packets.BLOCK_ACTOR_DATA, [
      { name: 'x', parser: DataType.VARINT },
      { name: 'y', parser: DataType.U_VARINT },
      { name: 'z', parser: DataType.VARINT },
      { name: 'namedTag', parser: DataType.STRING },
    ], p)
  }

}
