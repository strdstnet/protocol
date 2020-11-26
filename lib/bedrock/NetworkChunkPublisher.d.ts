import { BatchedPacket } from '../bedrock/BatchedPacket';
interface INetworkChunkPublisher {
    x: number;
    y: number;
    z: number;
    radius: number;
}
export declare class NetworkChunkPublisher extends BatchedPacket<INetworkChunkPublisher> {
    constructor(p?: INetworkChunkPublisher);
}
export {};
