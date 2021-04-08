import { IItem, IItemStack, Namespaced } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { DataType, Packets } from '../types'

interface IContainerNotification {
  containerId: number,
  stacks: IItemStack[],
}

export class ContainerNotification extends BatchedPacket<IContainerNotification> {

  constructor(p?: IContainerNotification) {
    super(Packets.CONTAINER_NOTIFICATION, [
      { name: 'containerId', parser: DataType.U_VARINT },
      {
        name: 'stacks',
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            data.writeUnsignedVarInt(props.stacks.length)

            for(const stack of props.stacks) {
              data.writeItemStack(stack)
            }
          } else {
            const count = data.readUnsignedVarInt()

            props.stacks = []
            for(let i = 0; i < count; i++) {
              props.stacks.push(data.readItemStack())
            }
          }
        },
      },
    ], p)
  }

}
