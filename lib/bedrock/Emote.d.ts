import { BatchedPacket } from './BatchedPacket';
interface IEmote {
    runtimeEntityId: bigint;
    emoteId: string;
    flags: number;
}
export declare class Emote extends BatchedPacket<IEmote> {
    constructor(p?: IEmote);
}
export {};
