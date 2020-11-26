import { Packet } from '../Packet'
import { DataType, Packets, Protocol } from '../types'

interface IIncompatibleProtocol {
  protocol: number,
  serverId: bigint,
}

export class IncompatibleProtocol extends Packet<IIncompatibleProtocol> {

  constructor(p?: IIncompatibleProtocol) {
    super(Packets.INCOMPATIBLE_PROTOCOL, [
      { name: 'protocol', parser: DataType.BYTE },
      { name: 'magic', parser: DataType.MAGIC },
      { name: 'serverId', parser: DataType.LONG },
    ], p)
  }

}
