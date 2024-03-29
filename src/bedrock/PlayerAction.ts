import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IPlayerAction {
  runtimeEntityId: bigint,
  action: number,
  actionX: number,
  actionY: number,
  actionZ: number,
  face: number,
}

export class PlayerAction extends BatchedPacket<IPlayerAction> {

  constructor(p?: IPlayerAction) {
    super(Packets.PLAYER_ACTION, [
      { name: 'runtimeEntityId', parser: DataType.U_VARLONG },
      { name: 'action', parser: DataType.VARINT },
      { name: 'actionX', parser: DataType.VARINT },
      { name: 'actionY', parser: DataType.U_VARINT },
      { name: 'actionZ', parser: DataType.VARINT },
      { name: 'face', parser: DataType.VARINT },
    ], p)
  }

}
