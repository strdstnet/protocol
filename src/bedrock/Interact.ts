import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { DataType, Packets, InteractAction } from '../types'

interface IInteract {
  action: number,
  target: bigint,
  x: number,
  y: number,
  z: number,
}

// TODO: Implement properly?
export class Interact extends BatchedPacket<IInteract> {

  constructor(p?: IInteract) {
    super(Packets.INTERACT, [
      { name: 'action', parser: DataType.BYTE },
      { name: 'target', parser: DataType.U_VARLONG },
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            if (props.action == InteractAction.MOUSE_OVER) {
              data.readFloat()
              data.readFloat()
              data.readFloat()
            }
          } else {
            throw new Error(`DECODE not implemented`)
          }
        },
      },
    ], p)
  }

}
