import { BatchedPacket } from '../bedrock/BatchedPacket';
interface ILevelEvent {
    eventId: number;
    x: number;
    y: number;
    z: number;
    data: number;
}
export declare class LevelEvent extends BatchedPacket<ILevelEvent> {
    constructor(p?: ILevelEvent);
}
export {};
