import { BatchedPacket } from '../bedrock/BatchedPacket';
interface IResourcePack {
    id: string;
    version: string;
    subPackName: string;
}
interface IResourcePacksStack {
    mustAccept: boolean;
    behaviourPacks: IResourcePack[];
    resourcePacks: IResourcePack[];
    experimental: boolean;
    gameVersion: string;
}
export declare class ResourcePacksStack extends BatchedPacket<IResourcePacksStack> {
    constructor(p?: IResourcePacksStack);
}
export {};
