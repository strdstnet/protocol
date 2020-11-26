import { BundledPacket } from './BundledPacket';
export interface IConnectionRequest {
    clientId: bigint;
    sendPingTime: bigint;
    hasSecurity: boolean;
}
export declare class ConnectionRequest extends BundledPacket<IConnectionRequest> {
    constructor(p?: IConnectionRequest);
}
