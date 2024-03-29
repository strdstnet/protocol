import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface INetworkChunkPublisher {
  x: number,
  y: number,
  z: number,
  radius: number, // blocks
}

export class NetworkChunkPublisher extends BatchedPacket<INetworkChunkPublisher> {

  constructor(p?: INetworkChunkPublisher) {
    super(Packets.NETWORK_CHUNK_PUBLISHER, [
      { name: 'x', parser: DataType.VARINT },
      { name: 'y', parser: DataType.VARINT },
      { name: 'z', parser: DataType.VARINT },
      { name: 'radius', parser: DataType.U_VARINT },
    ], p)
  }

}
