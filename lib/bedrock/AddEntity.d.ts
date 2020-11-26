import { Vector3 } from '@strdstnet/utils.binary';
import { Metadata } from '@strdstnet/utils.binary/lib/Metadata';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IAddEntityRequired {
    entityRuntimeId: bigint;
    type: string;
    position: Vector3;
    motion: Vector3;
    pitch: number;
    yaw: number;
    headYaw: number;
    metadata: Metadata;
}
interface IAddEntityOptional {
    entityUniqueId: bigint;
    attributes: number;
}
declare type IAddEntity = IAddEntityRequired & IAddEntityOptional;
export declare class AddEntity extends BatchedPacket<IAddEntity> {
    constructor(p?: IAddEntityRequired & Partial<IAddEntityOptional>);
}
export {};
