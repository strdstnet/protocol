import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IRemoveEntity {
  entityRuntimeId: bigint,
}

export class RemoveEntity extends BatchedPacket<IRemoveEntity> {

  constructor(p?: IRemoveEntity) {
    super(Packets.REMOVE_ENTITY, [
      { name: 'entityRuntimeId', parser: DataType.VARLONG },
    ], p)
  }

}
