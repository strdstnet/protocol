import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IResourcePack {
    id: string;
    version: string;
    size: bigint;
    encryptionKey: string;
    subPackName: string;
    contentId: string;
    hasScripts: boolean;
}
interface IResourcePacksInfo {
    mustAccept: boolean;
    hasScripts: boolean;
    behaviourPacks: IResourcePack[];
    resourcePacks: IResourcePack[];
}
export declare class ResourcePacksInfo extends BatchedPacket<IResourcePacksInfo> {
    constructor(p?: IResourcePacksInfo);
}
export {};
