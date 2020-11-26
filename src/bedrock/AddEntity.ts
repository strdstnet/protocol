import { Vector3 } from '@strdstnet/utils.binary'
import { Metadata } from '@strdstnet/utils.binary/lib/Metadata'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { def } from '../Packet'
import { DataType, Packets } from '../types'

interface IAddEntityRequired {
  entityRuntimeId: bigint,
  type: string,
  position: Vector3,
  motion: Vector3,
  pitch: number,
  yaw: number,
  headYaw: number,
  metadata: Metadata,
}

interface IAddEntityOptional {
  entityUniqueId: bigint,
  attributes: number,
}

type IAddEntity = IAddEntityRequired & IAddEntityOptional

export class AddEntity extends BatchedPacket<IAddEntity> {

  constructor(p?: IAddEntityRequired & Partial<IAddEntityOptional>) {
    super(Packets.ADD_ENTITY, [
      { name: 'entityUniqueId', parser: DataType.VARLONG, resolve: props => props.entityUniqueId || props.entityRuntimeId },
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      { name: 'type', parser: DataType.STRING },
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'motion', parser: DataType.VECTOR3 },
      { name: 'pitch', parser: DataType.FLOAT },
      { name: 'yaw', parser: DataType.FLOAT },
      { name: 'headYaw', parser: DataType.FLOAT },
      { name: 'attributes', parser: DataType.U_VARINT, resolve: def(0) },
      { name: 'metadata', parser: DataType.ENTITY_METADATA },
      { name: 'links', parser: DataType.U_VARINT, resolve: () => def(0) },
    ], p)
  }

}
