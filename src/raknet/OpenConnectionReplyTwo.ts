import { IAddress } from '@strdstnet/utils.binary'
import { Packet } from '../Packet'
import { DataType, Packets } from '../types'

export interface IOpenConnectionReplyTwo {
  serverId: bigint,
  address: IAddress,
  mtuSize: number,
}

export class OpenConnectionReplyTwo extends Packet<IOpenConnectionReplyTwo> {

  constructor(p?: IOpenConnectionReplyTwo) {
    super(Packets.OPEN_CONNECTION_REPLY_TWO, [
      { parser: DataType.MAGIC },
      { name: 'serverId', parser: DataType.LONG },
      { name: 'address', parser: DataType.ADDRESS },
      { name: 'mtuSize', parser: DataType.SHORT },
      { parser: DataType.BYTE, resolve: () => 0 },
    ], p)
  }

}
