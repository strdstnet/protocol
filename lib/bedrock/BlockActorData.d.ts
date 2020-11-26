import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IBlockActorData {
    x: number;
    y: number;
    z: number;
    namedTag: string;
}
export declare class BlockActorData extends BatchedPacket<IBlockActorData> {
    constructor(p?: IBlockActorData);
}
export {};
