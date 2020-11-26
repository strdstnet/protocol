import { Packet } from '../Packet'
import { DataType, Packets } from '../types'

export interface IOpenConnectionReplyOne {
  serverId: bigint,
  mtuSize: number,
}

export class OpenConnectionReplyOne extends Packet<IOpenConnectionReplyOne> {

  constructor(p?: IOpenConnectionReplyOne) {
    super(Packets.OPEN_CONNECTION_REPLY_ONE, [
      { parser: DataType.MAGIC },
      { name: 'serverId', parser: DataType.LONG },
      { parser: DataType.BYTE, resolve: () => 0 },
      { name: 'mtuSize', parser: DataType.SHORT },
    ], p)
  }

}
