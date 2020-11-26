import { IItem } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IEntityEquipment {
    entityRuntimeId: bigint;
    item: IItem;
    inventorySlot: number;
    hotbarSlot: number;
    containerId: number;
}
export declare class EntityEquipment extends BatchedPacket<IEntityEquipment> {
    constructor(p?: Partial<IEntityEquipment>);
}
export {};
