/// <reference types="node" />
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IBiomeDefinitionList {
    biomeDefinitions: Buffer;
}
export declare class BiomeDefinitionList extends BatchedPacket<IBiomeDefinitionList> {
    private static BIOME_DEFINITIONS;
    constructor(p?: Partial<IBiomeDefinitionList>);
}
export {};
