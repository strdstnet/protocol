import { BatchedPacket } from '../bedrock/BatchedPacket';
import { ResourcePackResponseStatus } from '../types';
interface IResourcePacksResponse {
    status: ResourcePackResponseStatus;
    packIds: string[];
}
export declare class ResourcePacksResponse extends BatchedPacket<IResourcePacksResponse> {
    constructor(p?: IResourcePacksResponse);
}
export {};
