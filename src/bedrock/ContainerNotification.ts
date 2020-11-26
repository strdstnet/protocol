import { IItem } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType } from '../Packet'
import { DataType, Packets } from '../types'

interface IContainerNotification {
  containerId: number,
  items: IItem[],
}

export class ContainerNotification extends BatchedPacket<IContainerNotification> {

  constructor(p?: IContainerNotification) {
    super(Packets.CONTAINER_NOTIFICATION, [
      { name: 'containerId', parser: DataType.U_VARINT },
      {
        name: 'items',
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            data.writeUnsignedVarInt(props.items.length)

            for(let i = 0; i < props.items.length; i++) {
              const item = props.items[i]
              data.writeVarInt(item.id === 0 || item.count < 1 ? 0 : 1)
              data.writeContainerItem(item)
            }
          } else {
            const count = data.readUnsignedVarInt()

            props.items = []
            for(let i = 0; i < count; i++) {
              const isEmpty = data.readVarInt() === 1

              props.items.push(data.readContainerItem())
            }
          }
        },
      },
    ], p)
  }

}
