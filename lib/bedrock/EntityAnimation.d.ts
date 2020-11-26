import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IEntityAnimation {
    entityRuntimeId: bigint;
    event: number;
    data: number;
}
export declare class EntityAnimation extends BatchedPacket<IEntityAnimation> {
    constructor(p?: IEntityAnimation);
}
export {};
