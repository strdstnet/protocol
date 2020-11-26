import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IInteract {
    action: number;
    target: bigint;
    x: number;
    y: number;
    z: number;
}
export declare class Interact extends BatchedPacket<IInteract> {
    constructor(p?: IInteract);
}
export {};
