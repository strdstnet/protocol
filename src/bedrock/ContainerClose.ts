import { BatchedPacket } from '../bedrock/BatchedPacket'
import { def } from '../Packet'
import { DataType, Packets } from '../types'

interface IContainerClose {
  windowId: number,
  server?: boolean,
}

export class ContainerClose extends BatchedPacket<IContainerClose> {

  constructor(p?: IContainerClose) {
    super(Packets.CONTAINER_CLOSE, [
      { name: 'windowId', parser: DataType.BYTE },
      { name: 'server', parser: DataType.BOOLEAN, resolve: def(false) },
    ], p)
  }

}
