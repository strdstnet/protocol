import { Metadata } from '@strdstnet/utils.binary/lib/Metadata';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IEntityMetadata {
    entityRuntimeId: bigint;
    metadata: Metadata;
    tick: bigint;
}
export declare class EntityMetadata extends BatchedPacket<IEntityMetadata> {
    constructor(p?: IEntityMetadata);
}
export {};
