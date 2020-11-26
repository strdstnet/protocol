import { DataType, Packets } from '../types'
import { BatchedPacket } from './BatchedPacket'

// TODO: Actually implement?
export class ItemComponent extends BatchedPacket<{}> {

  constructor() {
    super(Packets.ITEM_COMPONENT, [
      { parser: DataType.U_VARINT, resolve: () => 0 },
    ])
  }

}
