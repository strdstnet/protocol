import { Packet } from '../Packet';
export interface IUnconnectedPong {
    pingId: bigint;
    motd: string;
    serverId: bigint;
}
export interface IUnconnectedPongMOTD {
    line1: string;
    line2: string;
    maxPlayers: number;
    numPlayers: number;
}
export declare class UnconnectedPong extends Packet<IUnconnectedPong> {
    static getMOTD({ line1, line2, maxPlayers, numPlayers }: IUnconnectedPongMOTD): string;
    static parseMOTD(motd: string): IUnconnectedPongMOTD;
    constructor(p?: IUnconnectedPong);
}
