import { BundledPacket } from '../raknet/BundledPacket'
import { DataType, Packets } from '../types'

interface IDisconnect {
  hideScreen: boolean,
  message?: string,
}

export class Disconnect extends BundledPacket<IDisconnect> {

  constructor(p?: IDisconnect) {
    super(Packets.DISCONNECT, [
      { name: 'hideScreen', parser: DataType.BOOLEAN },
      { name: 'message', parser: DataType.STRING },
    ], p)
  }

}
