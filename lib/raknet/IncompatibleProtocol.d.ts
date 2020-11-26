import { Packet } from '../Packet';
interface IIncompatibleProtocol {
    protocol: number;
    serverId: bigint;
}
export declare class IncompatibleProtocol extends Packet<IIncompatibleProtocol> {
    constructor(p?: IIncompatibleProtocol);
}
export {};
