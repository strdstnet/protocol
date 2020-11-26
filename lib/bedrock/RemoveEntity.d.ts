import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IRemoveEntity {
    entityRuntimeId: bigint;
}
export declare class RemoveEntity extends BatchedPacket<IRemoveEntity> {
    constructor(p?: IRemoveEntity);
}
export {};
