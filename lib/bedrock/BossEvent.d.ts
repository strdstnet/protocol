import { BatchedPacket } from '../bedrock/BatchedPacket';
import { BossEventType } from '../types';
interface IBossEvent {
    type: BossEventType;
    bossRuntimeId: bigint;
    playerRuntimeId?: bigint;
    title?: string;
    health?: number;
    colour?: number;
    overlay?: number;
}
export declare class BossEvent extends BatchedPacket<IBossEvent> {
    constructor(p?: IBossEvent);
}
export {};
