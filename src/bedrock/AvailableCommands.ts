import { def, ParserType } from '../Packet'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, CommandPermissions, ICommandArgument } from '../types'

interface ICommand {
  trigger: string,
  description: string,
  permission: CommandPermissions,
  args: ICommandArgument[],
}

interface IAvailableCommands {
  commands: ICommand[],
}

export class AvailableCommands extends BatchedPacket<IAvailableCommands> {

  constructor(p?: IAvailableCommands) {
    super(Packets.AVAILABLE_COMMANDS, [
      { parser: DataType.U_VARINT, resolve: def(0) }, // TODO: enum values
      { parser: DataType.U_VARINT, resolve: def(0) }, // TODO: postfix data
      { parser: DataType.U_VARINT, resolve: def(0) }, // TODO: enum indexes
      {
        parser({ type, data, props }) {
          if(type === ParserType.ENCODE) {
            data.writeUnsignedVarInt(props.commands.length)

            for(const command of props.commands) {
              data.writeString(command.trigger)
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
