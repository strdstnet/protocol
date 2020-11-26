import { Vector3 } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, RespawnState } from '../types'

interface IRespawn {
  position: Vector3,
  state: RespawnState,
  entityRuntimeId: bigint,
}

export class Respawn extends BatchedPacket<IRespawn> {

  constructor(p?: IRespawn) {
    super(Packets.RESPAWN, [
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'state', parser: DataType.BYTE },
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
    ], p)
  }

}
