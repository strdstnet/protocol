import { Vector3 } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface ISetEntityMotion {
  runtimeEntityId: bigint,
  motion: Vector3,
}

export class SetEntityMotion extends BatchedPacket<ISetEntityMotion> {

  constructor(p?: ISetEntityMotion) {
    super(Packets.SET_ENTITY_MOTION, [
      { name: 'runtimeEntityId', parser: DataType.U_VARLONG },
      { name: 'motion', parser: DataType.VECTOR3 },
    ], p)
  }

}
