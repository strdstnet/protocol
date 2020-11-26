import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IPickupDroppedItem {
    target: bigint;
    runtimeEntityId: bigint;
}
export declare class PickupDroppedItem extends BatchedPacket<IPickupDroppedItem> {
    constructor(p?: IPickupDroppedItem);
}
export {};
