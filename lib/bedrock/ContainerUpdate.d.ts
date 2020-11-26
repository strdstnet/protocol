import { IItem } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IContainerUpdate {
    containerId: number;
    slot: number;
    item: IItem;
    stack?: number;
}
export declare class ContainerUpdate extends BatchedPacket<IContainerUpdate> {
    constructor(p?: IContainerUpdate);
}
export {};
