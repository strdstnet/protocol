import { DataType, Packets } from '../types'
import { BatchedPacket } from './BatchedPacket'

interface IEmote {
  runtimeEntityId: bigint,
  emoteId: string,
  flags: number,
}

export class Emote extends BatchedPacket<IEmote> {

  constructor(p?: IEmote) {
    super(Packets.EMOTE, [
      { name: 'runtimeEntityId', parser: DataType.U_VARLONG },
      { name: 'emoteId', parser: DataType.STRING },
      { name: 'flags', parser: DataType.BYTE },
    ], p)
  }

}
