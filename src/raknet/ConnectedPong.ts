import { DataType, Packets } from '../types'
import { BundledPacket } from './BundledPacket'

interface IConnectedPong {
  pingTime: bigint,
  pongTime: bigint,
}

export class ConnectedPong extends BundledPacket<IConnectedPong> {

  constructor(p?: IConnectedPong) {
    super(Packets.CONNECTED_PONG, [
      { name: 'pingTime', parser: DataType.LONG },
      { name: 'pongTime', parser: DataType.LONG },
    ], p)
  }

}
