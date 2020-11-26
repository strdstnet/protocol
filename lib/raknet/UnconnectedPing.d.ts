import { Packet } from '../Packet';
export interface IUnconnectedPing {
    pingId: bigint;
    clientId: bigint;
}
export declare class UnconnectedPing extends Packet<IUnconnectedPing> {
    constructor(p?: IUnconnectedPing);
}
