import { BatchedPacket } from './BatchedPacket';
interface IEntityFall {
    runtimeEntityId: bigint;
    fallDistance: number;
    isInVoid: boolean;
}
export declare class EntityFall extends BatchedPacket<IEntityFall> {
    constructor(p?: IEntityFall);
}
export {};
