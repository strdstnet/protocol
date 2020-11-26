import { BundledPacket } from './BundledPacket';
interface IConnectedPong {
    pingTime: bigint;
    pongTime: bigint;
}
export declare class ConnectedPong extends BundledPacket<IConnectedPong> {
    constructor(p?: IConnectedPong);
}
export {};
