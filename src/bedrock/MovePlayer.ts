import { def, ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, MovePlayerMode } from '../types'

interface IMovePlayer {
  runtimeEntityId: bigint,
  positionX: number,
  positionY: number,
  positionZ: number,
  pitch: number,
  yaw: number,
  headYaw: number,
  mode?: MovePlayerMode,
  onGround: boolean,
  ridingEntityRuntimeId: bigint,
  teleportCause: number,
  teleportItemId: number,
  tick?: bigint,
}

export class MovePlayer extends BatchedPacket<IMovePlayer> {
  constructor(p?: Partial<IMovePlayer>) {
    super(Packets.MOVE_PLAYER, [
      { name: 'runtimeEntityId', parser: DataType.U_VARLONG },
      { name: 'positionX', parser: DataType.L_FLOAT },
      { name: 'positionY', parser: DataType.L_FLOAT },
      { name: 'positionZ', parser: DataType.L_FLOAT },
      { name: 'pitch', parser: DataType.L_FLOAT },
      { name: 'yaw', parser: DataType.L_FLOAT },
      { name: 'headYaw', parser: DataType.L_FLOAT },
      { name: 'mode', parser: DataType.BYTE, resolve: def(MovePlayerMode.NORMAL) },
      { name: 'onGround', parser: DataType.BOOLEAN },
      { name: 'ridingEntityRuntimeId', parser: DataType.U_VARLONG },
      {
        parser({ type, data, props }) {
          if(props.mode === MovePlayerMode.TELEPORT) {
            if(type === ParserType.ENCODE) {
              data.writeLInt(props.teleportCause)
              data.writeLInt(props.teleportItemId)
            } else {
              props.teleportCause = data.readLInt()
              props.teleportItemId = data.readLInt()
            }
          }
        },
      },
      { name: 'tick', parser: DataType.U_VARLONG, resolve: def(BigInt(Math.round(Date.now() / 50))) },
    ], p)
  }
}
