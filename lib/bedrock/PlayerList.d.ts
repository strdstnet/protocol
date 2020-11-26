import { BatchedPacket } from '../bedrock/BatchedPacket';
import { SkinData, UUID } from '@strdstnet/utils.binary';
export declare enum PlayerListType {
    ADD = 0,
    REMOVE = 1
}
interface IPlayer {
    id: bigint;
    UUID: UUID;
    XUID: string;
    username: string;
    skinData: SkinData;
}
interface IPlayerList {
    type: PlayerListType;
    players: IPlayer[];
}
export declare class PlayerList extends BatchedPacket<IPlayerList> {
    constructor(p?: IPlayerList);
}
export {};
