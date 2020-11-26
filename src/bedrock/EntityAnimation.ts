import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IEntityAnimation {
  entityRuntimeId: bigint,
  event: number,
  data: number
}

export class EntityAnimation extends BatchedPacket<IEntityAnimation> {

  constructor(p?: IEntityAnimation) {
    super(Packets.ENTITY_ANIMATION, [
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'event', parser: DataType.BYTE },
      { name: 'data', parser: DataType.VARINT },
    ], p)
  }

}
