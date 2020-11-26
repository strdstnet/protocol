import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { DataType, Packets } from '../types'

interface IAnimate {
  action: number,
  entityRuntimeId: bigint,
  boatRowingTime?: number
}

export class Animate extends BatchedPacket<IAnimate> {

  constructor(p?: IAnimate) {
    super(Packets.ANIMATE, [
      { name: 'action', parser: DataType.VARINT },
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            if((props.action & 0x80) !== 0) {
              data.writeFloat(props.boatRowingTime || 0)
            }
          } else {
            if((props.action & 0x80) !== 0) {
              props.boatRowingTime = data.readFloat()
            }
          }
        },
      },
    ], p)
  }

}
