import { IItem } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IContainerNotification {
    containerId: number;
    items: IItem[];
}
export declare class ContainerNotification extends BatchedPacket<IContainerNotification> {
    constructor(p?: IContainerNotification);
}
export {};
