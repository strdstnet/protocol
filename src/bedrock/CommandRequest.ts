import { UUID } from '@strdstnet/utils.binary'
import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, CommandOriginType } from '../types'

interface ICommandRequest {
  command: string,
  originType: CommandOriginType,
  originUUID: UUID,
  requestId: string,
  internal: boolean,
}

export class CommandRequest extends BatchedPacket<ICommandRequest> {

  constructor(p?: ICommandRequest) {
    super(Packets.COMMAND_REQUEST, [
      { name: 'command', parser: DataType.STRING },
      { name: 'originType', parser: DataType.U_VARINT },
      { name: 'originUUID', parser: DataType.UUID },
      { name: 'requestId', parser: DataType.STRING },
      { name: 'internal', parser: DataType.BOOLEAN },
    ], p)
  }

}
