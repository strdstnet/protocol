import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, Gamemode } from '../types'

interface ISetGamemode {
  mode: Gamemode,
}

export class SetGamemode extends BatchedPacket<ISetGamemode> {

  constructor(p?: ISetGamemode) {
    super(Packets.SET_GAMEMODE, [
      { name: 'mode', parser: DataType.VARINT },
    ], p)
  }

}
