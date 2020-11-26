import { Vector3 } from '@strdstnet/utils.binary';
import { BatchedPacket } from './BatchedPacket';
export declare enum BlockUpdateFlags {
    NONE = 0,
    NEIGHBORS = 1,
    NETWORK = 2,
    NOGRAPHIC = 4,
    PRIORITY = 8
}
export declare enum BlockUpdateDataLayer {
    NORMAL = 0,
    LIQUID = 1
}
interface IBlockUpdateRequired {
    position: Vector3;
    blockRuntimeId: number;
}
interface IBlockUpdateOptional {
    flags: BlockUpdateFlags;
    dataLayer: BlockUpdateDataLayer;
}
declare type IBlockUpdate = IBlockUpdateRequired & IBlockUpdateOptional;
export declare class BlockUpdate extends BatchedPacket<IBlockUpdate> {
    constructor(p?: IBlockUpdateRequired & Partial<IBlockUpdateOptional>);
}
export {};
