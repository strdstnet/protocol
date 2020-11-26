import { BundledPacket } from '../raknet/BundledPacket';
interface IDisconnect {
    hideScreen: boolean;
    message?: string;
}
export declare class Disconnect extends BundledPacket<IDisconnect> {
    constructor(p?: IDisconnect);
}
export {};
