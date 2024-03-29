import { Packet } from '../Packet'
import { DataType, Packets } from '../types'

export interface IUnconnectedPing {
  pingId: bigint,
  clientId: bigint,
}

export class UnconnectedPing extends Packet<IUnconnectedPing> {

  constructor(p?: IUnconnectedPing) {
    super(Packets.UNCONNECTED_PING, [
      { name: 'pingId', parser: DataType.LONG },
      { name: 'magic', parser: DataType.MAGIC },
      { name: 'clientId', parser: DataType.LONG },
    ], p)
  }

}
