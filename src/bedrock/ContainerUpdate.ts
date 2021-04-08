import { IItem, IItemStack } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IContainerUpdate {
  containerId: number,
  slot: number,
  stack: IItemStack,
}

export class ContainerUpdate extends BatchedPacket<IContainerUpdate> {

  constructor(p?: IContainerUpdate) {
    super(Packets.CONTAINER_UPDATE, [
      { name: 'containerId', parser: DataType.U_VARINT },
      { name: 'slot', parser: DataType.U_VARINT },
      { name: 'stack', parser: DataType.CONTAINER_ITEM },
    ], p)
  }

}
