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
      { name: 'blockX', parser: DataType.VARINT },
      { name: 'blockY', parser: DataType.VARINT },
      { name: 'blockZ', parser: DataType.VARINT },
      { name: 'addUserData', parser: DataType.BOOLEAN },
      { name: 'hotbarSlot', parser: DataType.BYTE },
    ], p)
  }

}
