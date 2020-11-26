import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IRequestChunkRadius {
    radius: number;
}
export declare class RequestChunkRadius extends BatchedPacket<IRequestChunkRadius> {
    constructor(p?: IRequestChunkRadius);
}
export {};
