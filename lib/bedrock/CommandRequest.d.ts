import { UUID } from '@strdstnet/utils.binary';
import { BatchedPacket } from '../bedrock/BatchedPacket';
import { CommandOriginType } from '../types';
interface ICommandRequest {
    command: string;
    originType: CommandOriginType;
    originUUID: UUID;
    requestId: string;
    internal: boolean;
}
export declare class CommandRequest extends BatchedPacket<ICommandRequest> {
    constructor(p?: ICommandRequest);
}
export {};
