import { Metadata } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface IEntityMetadata {
  entityRuntimeId: bigint,
  metadata: Metadata,
  tick: bigint,
}

export class EntityMetadata extends BatchedPacket<IEntityMetadata> {

  constructor(p?: IEntityMetadata) {
    super(Packets.ENTITY_METADATA, [
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'metadata', parser: DataType.ENTITY_METADATA },
      { name: 'tick', parser: DataType.U_VARLONG },
    ], p)
  }

}
