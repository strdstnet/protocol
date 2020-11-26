import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IContainerClose {
    windowId: number;
    server?: boolean;
}
export declare class ContainerClose extends BatchedPacket<IContainerClose> {
    constructor(p?: IContainerClose);
}
export {};
