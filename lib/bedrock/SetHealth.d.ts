import { BatchedPacket } from '../bedrock/BatchedPacket';
interface ISetHealth {
    health: number;
}
export declare class SetHealth extends BatchedPacket<ISetHealth> {
    constructor(p?: ISetHealth);
}
export {};
