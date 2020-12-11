import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Gamemode, Packets } from '../types'

interface ISetPlayerGamemode {
  gamemode: Gamemode,
}

export class SetPlayerGamemode extends BatchedPacket<ISetPlayerGamemode> {

  constructor(p?: ISetPlayerGamemode) {
    super(Packets.SET_GAMEMODE, [
      { name: 'gamemode', parser: DataType.VARINT },
    ], p)
  }

}
