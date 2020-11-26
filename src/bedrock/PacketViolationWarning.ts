import { BatchedPacket } from '../bedrock/BatchedPacket'
import { DataType, Packets, PacketViolationType, PacketViolationSeverity } from '../types'

interface IPacketViolationWarning {
  type: PacketViolationType,
  severity: PacketViolationSeverity,
  packetId: number,
  message: string,
}

export class PacketViolationWarning extends BatchedPacket<IPacketViolationWarning> {

  constructor(p?: IPacketViolationWarning) {
    super(Packets.PACKET_VIOLATION_WARNING, [
      { name: 'type', parser: DataType.VARINT },
      { name: 'severity', parser: DataType.VARINT },
      { name: 'packetId', parser: DataType.VARINT },
      { name: 'message', parser: DataType.STRING },
    ], p)
  }

}
