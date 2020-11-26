import { BatchedPacket } from '../bedrock/BatchedPacket';
import { IAttribute } from '../types';
export interface IUpdateAttributes {
    entityRuntimeId: bigint;
    entries: IAttribute[];
    tick?: bigint;
}
export declare class UpdateAttributes extends BatchedPacket<IUpdateAttributes> {
    constructor(p?: IUpdateAttributes);
}
