import { Vector3 } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
import { RespawnState } from '../types';
interface IRespawn {
    position: Vector3;
    state: RespawnState;
    entityRuntimeId: bigint;
}
export declare class Respawn extends BatchedPacket<IRespawn> {
    constructor(p?: IRespawn);
}
export {};
