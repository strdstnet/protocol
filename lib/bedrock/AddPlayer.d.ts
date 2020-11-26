import { IItem, UUID, Vector3 } from '@strdstnet/utils.binary';
import { Metadata } from '@strdstnet/utils.binary/lib/Metadata';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IAddPlayerRequired {
    uuid: UUID;
    username: string;
    entityUniqueId: bigint;
    entityRuntimeId: bigint;
    position: Vector3;
    motion: Vector3;
    pitch: number;
    yaw: number;
    headYaw: number;
}
interface IAddPlayerOptional {
    platformChatId: string;
    item: IItem;
    deviceId: string;
    buildPlatform: number;
    metadata: Metadata;
}
declare type IAddPlayer = IAddPlayerRequired & IAddPlayerOptional;
export declare class AddPlayer extends BatchedPacket<IAddPlayer> {
    constructor(p?: IAddPlayerRequired & Partial<IAddPlayerOptional>);
}
export {};
