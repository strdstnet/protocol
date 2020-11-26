import { def } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { Vector3 } from '@strdstnet/utils.binary'
import { DataType, Packets, Dimension } from '../types'

interface IChangeDimension {
  dimension: Dimension,
  position: Vector3,
  respawn?: boolean
}

export class ChangeDimension extends BatchedPacket<IChangeDimension> {

  constructor(p?: IChangeDimension) {
    super(Packets.CHANGE_DIMENSION, [
      { name: 'dimension', parser: DataType.VARINT },
      { name: 'position', parser: DataType.VECTOR3 },
      { name: 'respawn', parser: DataType.BOOLEAN, resolve: def(false) },
    ], p)
  }

}
