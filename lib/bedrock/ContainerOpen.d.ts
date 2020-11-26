import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IContainerOpen {
    windowId: number;
    containerType: number;
    containerX: number;
    containerY: number;
    containerZ: number;
    containerEntityId: bigint;
}
export declare class ContainerOpen extends BatchedPacket<IContainerOpen> {
    constructor(p?: IContainerOpen);
}
export {};
