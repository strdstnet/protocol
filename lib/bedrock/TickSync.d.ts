import { BatchedPacket } from './BatchedPacket';
interface ITickSync {
    clientRequestTimestamp: bigint;
    serverReceptionTimestamp: bigint;
}
export declare class TickSync extends BatchedPacket<ITickSync> {
    constructor(p?: ITickSync);
}
export {};
