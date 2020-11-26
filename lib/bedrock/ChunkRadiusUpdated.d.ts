import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IChunkRadiusUpdated {
    radius: number;
}
export declare class ChunkRadiusUpdated extends BatchedPacket<IChunkRadiusUpdated> {
    constructor(p?: IChunkRadiusUpdated);
}
export {};
