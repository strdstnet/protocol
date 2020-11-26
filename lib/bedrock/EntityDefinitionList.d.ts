/// <reference types="node" />
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IEntityDefinitionList {
    entityDefinitions: Buffer;
}
export declare class EntityDefinitionList extends BatchedPacket<IEntityDefinitionList> {
    private static ENTITY_DEFINITIONS;
    constructor(p?: Partial<IEntityDefinitionList>);
}
export {};
