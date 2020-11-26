import { DataType, Packets } from '../types'
import { BatchedPacket } from './BatchedPacket'

interface IEntityFall {
  runtimeEntityId: bigint,
  fallDistance: number,
  isInVoid: boolean,
}

export class EntityFall extends BatchedPacket<IEntityFall> {

  constructor(p?: IEntityFall) {
    super(Packets.ENTITY_FALL, [
      { name: 'runtimeEntityId', parser: DataType.U_VARLONG },
      { name: 'fallDistance', parser: DataType.L_FLOAT },
      { name: 'isInVoid', parser: DataType.BOOLEAN },
    ], p)
  }

}
