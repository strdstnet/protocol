import { BatchedPacket } from '../bedrock/BatchedPacket';
interface ISetTime {
    time: number;
}
export declare class SetTime extends BatchedPacket<ISetTime> {
    constructor(p?: ISetTime);
}
export {};
