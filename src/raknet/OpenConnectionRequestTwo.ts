import { IAddress } from '@strdstnet/utils.binary'
import { Packet } from '../Packet'
import { DataType, Packets } from '../types'

export interface IOpenConnectionRequestTwo {
  address: IAddress,
  mtuSize: number,
  clientId: bigint,
}

export class OpenConnectionRequestTwo extends Packet<IOpenConnectionRequestTwo> {

  constructor(p?: IOpenConnectionRequestTwo) {
    super(Packets.OPEN_CONNECTION_REQUEST_TWO, [
      { parser: DataType.MAGIC },
      { name: 'address', parser: DataType.ADDRESS },
      { name: 'mtuSize', parser: DataType.SHORT },
      { name: 'clientId', parser: DataType.LONG },
    ], p)
  }

}
