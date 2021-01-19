import { def, ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, ICommand } from '../types'

interface IAvailableCommands {
  commands: ICommand[],
}

interface ITempProps {
  enumValues: string[],
  enumMap: Map<string, number[]>, // Map<name, value indexes>
}

export class AvailableCommands extends BatchedPacket<IAvailableCommands, ITempProps> {

  constructor(p?: IAvailableCommands) {
    super(Packets.AVAILABLE_COMMANDS, [
      {
        parser({ type, data, props, tempProps }) {
          if(type === ParserType.ENCODE) {
            tempProps.enumValues = []
            tempProps.enumMap = new Map()

            for(const command of props.commands) {
              const name = command.name.toLowerCase()

              const indexes = []
              for(const alias of command.aliases) {
                const alName = alias.toLowerCase()

                if(alName === name) continue

                indexes.push(tempProps.enumValues.push(alName) - 1)
              }

              if(indexes.length) {
                const capName = `${name[0].toUpperCase()}${name.substr(1)}`
                tempProps.enumMap.set(`${capName}Aliases`, indexes)
              }
            }

            data.writeUnsignedVarInt(tempProps.enumValues.length)
            for(const val of tempProps.enumValues) {
              data.writeString(val)
            }
          } else {
            // TODO: DECODE
            throw new Error(`DECODE not implemented`)
          }
        }
      },
      { parser: DataType.U_VARINT, resolve: def(0) }, // TODO: postfix data
      {
        parser({ type, data, props, tempProps }) {
          if(type === ParserType.ENCODE) {
            data.writeUnsignedVarInt(tempProps.enumMap.size)

            const valueCount = tempProps.enumValues.length

            for(const [name, indexes] of tempProps.enumMap) {
              data.writeString(name)
              data.writeUnsignedVarInt(indexes.length)

              for(const index of indexes) {
                if(valueCount < 256) {
                  data.writeByte(index)
                } else if(valueCount < 65536) {
                  data.writeLShort(index)
                } else {
                  data.writeLInt(index)
                }
              }
            }
          } else {
            // TODO: DECODE
            throw new Error(`DECODE not implemented`)
          }
        }
      },
      {
        parser({ type, data, props, tempProps }) {
          if(type === ParserType.ENCODE) {
            data.writeUnsignedVarInt(props.commands.length)

            for(const command of props.commands) {
              const name = command.name.toLowerCase()

              data.writeString(name)
              data.writeString(command.description)
              data.writeByte(0)
              data.writeByte(command.permission)
              data.writeLInt(-1) // alias enum indexes
              data.writeUnsignedVarInt(1)
              data.writeUnsignedVarInt(command.args.length)
              for(const arg of command.args) {
                data.writeString(arg.name)
                data.writeLInt(0x100000 | arg.type)
                data.writeBoolean(arg.optional)
                data.writeByte(0)
              }
            }

            data.writeUnsignedVarInt(0)
            data.writeUnsignedVarInt(0)
          } else {
            // TODO: DECODE
            throw new Error(`DECODE not implemented`)
          }
        },
      },
    ], p)
  }

}
