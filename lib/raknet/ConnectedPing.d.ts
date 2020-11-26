import { BundledPacket, BPacketOpt } from './BundledPacket';
export interface IConnectedPing {
    time: bigint;
}
export declare class ConnectedPing extends BundledPacket<IConnectedPing> {
    constructor(p?: BPacketOpt<IConnectedPing>);
}
