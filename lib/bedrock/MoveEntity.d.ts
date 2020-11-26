import { Vector3 } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
export declare enum MoveEntityMode {
    GROUND = 1,
    TELEPORT = 2,
    FORCE_LOCAL = 3
}
interface IMoveEntity {
    runtimeEntityId: bigint;
    mode?: MoveEntityMode;
    position: Vector3;
}
export declare class MoveEntity extends BatchedPacket<IMoveEntity> {
    constructor(p?: Partial<IMoveEntity>);
}
export {};
