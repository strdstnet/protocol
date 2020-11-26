import { BinaryData, IAddress } from '@strdstnet/utils.binary'
import { Packet } from '../Packet'
import { DataType, Packets } from '../types'

interface IEzLogin {
  address: IAddress,
  mtuSize: number,
  clientId: bigint,
  sequenceNumber: number,
  loginData: BinaryData,
}

export class EzLogin extends Packet<IEzLogin> {

  constructor() {
    super(Packets.EZ_LOGIN, [
      { name: 'address', parser: DataType.ADDRESS },
      { name: 'mtuSize', parser: DataType.SHORT },
      { name: 'clientId', parser: DataType.LONG },
      { name: 'sequenceNumber', parser: DataType.L_TRIAD },
      { name: 'loginData', parser: DataType.BYTE_ARRAY },
    ])
  }

}
