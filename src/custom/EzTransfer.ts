import { BinaryData } from '@strdstnet/utils.binary'
import { Packet } from '../Packet'
import { DataType, Packets } from '../types'

interface IEzTransfer {
  serverType: string,
  clientId: bigint,
  sequenceNumber: number,
  loginData: BinaryData,
}

export class EzTransfer extends Packet<IEzTransfer> {

  constructor(public props: IEzTransfer) {
    super(Packets.EZ_TRANSFER, [
      { name: 'serverType', parser: DataType.STRING },
      { name: 'clientId', parser: DataType.LONG },
      { name: 'sequenceNumber', parser: DataType.L_TRIAD },
      { name: 'loginData', parser: DataType.BYTE_ARRAY },
    ])
  }

}
