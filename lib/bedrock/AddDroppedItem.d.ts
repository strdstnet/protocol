import { IItem, Vector3 } from '@strdstnet/utils.binary';
import { Metadata } from '@strdstnet/utils.binary/lib/Metadata';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IAddDroppedItem {
    entityRuntimeId: bigint;
    entityUniqueId: bigint;
    item: IItem;
    position: Vector3;
    motion: Vector3;
    metadata: Metadata;
    fromFishing: boolean;
}
export declare class AddDroppedItem extends BatchedPacket<IAddDroppedItem> {
    constructor(p?: IAddDroppedItem);
}
export {};
