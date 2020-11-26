import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets } from '../types'

interface ISetLocalPlayerInitialized {
  entityRuntimeId: bigint,
}

export class SetLocalPlayerInitialized extends BatchedPacket<ISetLocalPlayerInitialized> {

  constructor(p?: ISetLocalPlayerInitialized) {
    super(Packets.SET_LOCAL_PLAYER_INITIALIZED, [
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
    ], p)
  }

}
