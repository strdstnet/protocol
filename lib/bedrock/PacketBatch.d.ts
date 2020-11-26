import { BPacketOpt, BundledPacket } from '../raknet/BundledPacket';
import { BatchedPacket } from './BatchedPacket';
interface IPacketBatch {
    packets: Array<BatchedPacket<any>>;
}
export declare class PacketBatch extends BundledPacket<IPacketBatch> {
    private static PID_MASK;
    private static SENDER_SUBCLIENT_ID_SHIFT;
    private static RECIPIENT_SUBCLIENT_ID_SHIFT;
    private static senderSubId;
    private static recipientSubId;
    constructor(p?: BPacketOpt<IPacketBatch>);
}
export {};
