import { BatchedPacket } from '../bedrock/BatchedPacket'
import { ParserType, def } from '../Packet'
import { DataType, Packets, IAttribute } from '../types'

export interface IUpdateAttributes {
  entityRuntimeId: bigint,
  entries: IAttribute[],
  tick?: bigint,
}

export class UpdateAttributes extends BatchedPacket<IUpdateAttributes> {

  constructor(p?: IUpdateAttributes) {
    super(Packets.UPDATE_ATTRIBUTES, [
      { name: 'entityRuntimeId', parser: DataType.U_VARLONG },
      {
        parser({ type, data, props }) {
          if(type === ParserType.DECODE) {
            props.entries = []

            const count = data.readUnsignedVarInt()
            for(let i = 0; i < count; i++) {
              props.entries.push({
                name: data.readString(),
                defaultVal: data.readFloat(),
                currentVal: data.readFloat(),
                minVal: data.readFloat(),
                maxVal: data.readFloat(),
              })
            }
          } else {
            data.writeUnsignedVarInt(props.entries.length)

            for(const attr of props.entries) {
              data.writeFloat(attr.minVal)
              data.writeFloat(attr.maxVal)
              data.writeFloat(attr.currentVal)
              data.writeFloat(attr.defaultVal)
              data.writeString(attr.name)
            }
          }
        }
      },
      { name: 'tick', parser: DataType.U_VARLONG, resolve: def(BigInt(Math.round(Date.now() / 50))) },
    ], p)
  }

}
