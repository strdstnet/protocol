import { BatchedPacket } from '../bedrock/BatchedPacket';
import { PacketViolationType, PacketViolationSeverity } from '../types';
interface IPacketViolationWarning {
    type: PacketViolationType;
    severity: PacketViolationSeverity;
    packetId: number;
    message: string;
}
export declare class PacketViolationWarning extends BatchedPacket<IPacketViolationWarning> {
    constructor(p?: IPacketViolationWarning);
}
export {};
