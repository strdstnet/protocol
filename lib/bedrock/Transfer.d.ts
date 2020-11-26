import { BatchedPacket } from '../bedrock/BatchedPacket';
export interface ITransfer {
    address: string;
    port: number;
}
export declare class Transfer extends BatchedPacket<ITransfer> {
    constructor(p?: ITransfer);
}
