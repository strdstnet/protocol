import { BatchedPacket } from '../bedrock/BatchedPacket';
import { MovePlayerMode } from '../types';
interface IMovePlayer {
    runtimeEntityId: bigint;
    positionX: number;
    positionY: number;
    positionZ: number;
    pitch: number;
    yaw: number;
    headYaw: number;
    mode?: MovePlayerMode;
    onGround: boolean;
    ridingEntityRuntimeId: bigint;
    teleportCause: number;
    teleportItemId: number;
    tick?: bigint;
}
export declare class MovePlayer extends BatchedPacket<IMovePlayer> {
    constructor(p?: Partial<IMovePlayer>);
}
export {};
