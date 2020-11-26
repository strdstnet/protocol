import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IPickupDroppedItem {
  target: bigint,
  runtimeEntityId: bigint,
}

export class PickupDroppedItem extends BatchedPacket<IPickupDroppedItem> {

  constructor(p?: IPickupDroppedItem) {
    super(Packets.PICK_UP_DROPPED_ITEM, [
      { name: 'target', parser: DataType.U_VARLONG },
      { name: 'runtimeEntityId', parser: DataType.U_VARLONG },
    ], p)
  }

}
