import { DataType, Packets } from '../types'
import { BundledPacket, BPacketOpt } from './BundledPacket'

export interface IConnectedPing {
  time: bigint,
}

export class ConnectedPing extends BundledPacket<IConnectedPing> {

  constructor(p?: BPacketOpt<IConnectedPing>) {
    super(Packets.CONNECTED_PING, [
      { name: 'time', parser: DataType.LONG },
    ], p)
  }

}
