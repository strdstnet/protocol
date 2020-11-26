import { Packet } from '../Packet';
export interface IOpenConnectionReplyOne {
    serverId: bigint;
    mtuSize: number;
}
export declare class OpenConnectionReplyOne extends Packet<IOpenConnectionReplyOne> {
    constructor(p?: IOpenConnectionReplyOne);
}
