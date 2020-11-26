import { BinaryData, IAddress } from '@strdstnet/utils.binary';
import { Packet } from '../Packet';
interface IEzLogin {
    address: IAddress;
    mtuSize: number;
    clientId: bigint;
    sequenceNumber: number;
    loginData: BinaryData;
}
export declare class EzLogin extends Packet<IEzLogin> {
    constructor();
}
export {};
