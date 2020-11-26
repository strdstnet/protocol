import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

export interface ITransfer {
  address: string,
  port: number,
}

export class Transfer extends BatchedPacket<ITransfer> {

  constructor(p?: ITransfer) {
    super(Packets.TRANSFER, [
      { name: 'address', parser: DataType.STRING },
      { name: 'port', parser: DataType.L_SHORT },
    ], p)
  }

}
