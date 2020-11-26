import { BatchedPacket } from '../bedrock/BatchedPacket';
import { PlayStatusType } from '../types';
interface IPlayStatus {
    status: PlayStatusType;
}
export declare class PlayStatus extends BatchedPacket<IPlayStatus> {
    constructor(p?: IPlayStatus);
}
export {};
