import { IItem } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IEntityEquipment {
  entityRuntimeId: bigint,
  item: IItem,
  inventorySlot: number,
  hotbarSlot: number,
  containerId: number,
}

export class EntityEquipment extends BatchedPacket<IEntityEquipment> {

  constructor(p?: Partial<IEntityEquipment>) {
    super(Packets.ENTITY_EQUIPMENT, [
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'item', parser: DataType.CONTAINER_ITEM },
      { name: 'inventorySlot', parser: DataType.BYTE },
      { name: 'hotbarSlot', parser: DataType.BYTE },
      { name: 'containerId', parser: DataType.BYTE },
    ], p)
  }

}
