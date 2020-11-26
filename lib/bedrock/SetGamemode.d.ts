import { BatchedPacket } from '../bedrock/BatchedPacket';
import { Gamemode } from '../types';
interface ISetGamemode {
    mode: Gamemode;
}
export declare class SetGamemode extends BatchedPacket<ISetGamemode> {
    constructor(p?: ISetGamemode);
}
export {};
