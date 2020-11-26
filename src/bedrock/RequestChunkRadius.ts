import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IRequestChunkRadius {
  radius: number,
}

export class RequestChunkRadius extends BatchedPacket<IRequestChunkRadius> {

  constructor(p?: IRequestChunkRadius) {
    super(Packets.REQUEST_CHUNK_RADIUS, [
      { name: 'radius', parser: DataType.VARINT },
    ], p)
  }

}
