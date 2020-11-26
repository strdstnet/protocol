import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IPlayerAction {
    runtimeEntityId: bigint;
    action: number;
    actionX: number;
    actionY: number;
    actionZ: number;
    face: number;
}
export declare class PlayerAction extends BatchedPacket<IPlayerAction> {
    constructor(p?: IPlayerAction);
}
export {};
