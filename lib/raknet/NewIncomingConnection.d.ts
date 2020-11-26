import { BundledPacket } from './BundledPacket';
import { IAddress } from '@strdstnet/utils.binary';
interface INewIncomingConnection {
    address: IAddress;
    systemAddresses: IAddress[];
    pingTime: bigint;
    pongTime: bigint;
}
export declare class NewIncomingConnection extends BundledPacket<INewIncomingConnection> {
    constructor(p?: INewIncomingConnection);
}
export {};
