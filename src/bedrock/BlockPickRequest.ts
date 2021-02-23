import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IBlockPickRequest {
  blockX: number,
  blockY: number,
  blockZ: number,
  addUserData: boolean,
  hotbarSlot: number
}

export class BlockPickRequest extends BatchedPacket<IBlockPickRequest> {

  constructor(p?: IBlockPickRequest) {
    super(Packets.BLOCK_PICK_REQUEST, [
      { name: 'blockX', parser: DataType.BLOCK_POSITION },
      { name: 'blockY', parser: DataType.BLOCK_POSITION },
      { name: 'blockZ', parser: DataType.BLOCK_POSITION },
      { name: 'addUserData', parser: DataType.BOOLEAN },
      { name: 'hotbarSlot', parser: DataType.BYTE },
    ], p)
  }

}
