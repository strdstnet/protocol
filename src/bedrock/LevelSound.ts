import { Vector3 } from '@strdstnet/utils.binary'
import { DataType, Packets } from '../types'
import { BatchedPacket } from './BatchedPacket'

interface ILevelSound {
  sound: number,
  position: Vector3,
  extraData: number,
  entityType: string,
  isBabyMob: boolean,
  disableRelativeVolume: boolean
}

export class LevelSound extends BatchedPacket<ILevelSound> {

  constructor(p?: ILevelSound) {
    super(Packets.LEVEL_SOUND, [
      { name: 'sound', parser: DataType.U_VARINT },
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'extraData', parser: DataType.VARINT },
      { name: 'entityType', parser: DataType.STRING },
      { name: 'isBabyMob', parser: DataType.BOOLEAN },
      { name: 'disableRelativeVolume', parser: DataType.BOOLEAN },
    ], p)
  }

}
