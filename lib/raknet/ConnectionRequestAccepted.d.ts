import { BundledPacket } from './BundledPacket';
import { IAddress } from '@strdstnet/utils.binary';
interface IConnectionRequestAccepted {
    address: IAddress;
    systemIndex: number;
    systemAddresses: IAddress[];
    requestTime: bigint;
    time: bigint;
}
export declare class ConnectionRequestAccepted extends BundledPacket<IConnectionRequestAccepted> {
    constructor(p?: IConnectionRequestAccepted);
}
export {};
