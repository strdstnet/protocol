import { Packet } from '../Packet';
import { Packets } from '../types';
interface IAcknowledgement {
    sequences: number[];
}
export declare abstract class Acknowledgement extends Packet<IAcknowledgement> {
    static MAX_PACKETS: number;
    constructor(pkId: Packets.ACK | Packets.NAK, sequences?: number[]);
    private add;
}
export {};
