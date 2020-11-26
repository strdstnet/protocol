import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IAnimate {
    action: number;
    entityRuntimeId: bigint;
    boatRowingTime?: number;
}
export declare class Animate extends BatchedPacket<IAnimate> {
    constructor(p?: IAnimate);
}
export {};
