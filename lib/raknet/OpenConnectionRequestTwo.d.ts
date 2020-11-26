import { IAddress } from '@strdstnet/utils.binary';
import { Packet } from '../Packet';
export interface IOpenConnectionRequestTwo {
    address: IAddress;
    mtuSize: number;
    clientId: bigint;
}
export declare class OpenConnectionRequestTwo extends Packet<IOpenConnectionRequestTwo> {
    constructor(p?: IOpenConnectionRequestTwo);
}
