import { BatchedPacket } from '../bedrock/BatchedPacket';
interface ISetLocalPlayerInitialized {
    entityRuntimeId: bigint;
}
export declare class SetLocalPlayerInitialized extends BatchedPacket<ISetLocalPlayerInitialized> {
    constructor(p?: ISetLocalPlayerInitialized);
}
export {};
