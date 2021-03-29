import { IItem, Vector3, Metadata } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IAddDroppedItem {
  entityRuntimeId: bigint,
  entityUniqueId: bigint,
  item: IItem,
  position: Vector3,
  motion: Vector3,
  metadata: Metadata,
  fromFishing: boolean
}

export class AddDroppedItem extends BatchedPacket<IAddDroppedItem> {

  constructor(p?: IAddDroppedItem) {
    super(Packets.ADD_DROPPED_ITEM, [
      { name: 'entityUniqueId', parser: DataType.VARLONG, resolve: props => props.entityUniqueId || props.entityRuntimeId },
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'item', parser: DataType.CONTAINER_ITEM },
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'motion', parser: DataType.VECTOR3 },
      { name: 'metadata', parser: DataType.ENTITY_METADATA },
      { name: 'fromFishing', parser: DataType.BOOLEAN },
    ], p)
  }

}
