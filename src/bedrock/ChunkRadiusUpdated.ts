import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IChunkRadiusUpdated {
  radius: number,
}

export class ChunkRadiusUpdated extends BatchedPacket<IChunkRadiusUpdated> {

  constructor(p?: IChunkRadiusUpdated) {
    super(Packets.CHUNK_RADIUS_UPDATED, [
      { name: 'radius', parser: DataType.VARINT },
    ], p)
  }

}
