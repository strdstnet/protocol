import { IAddress } from '@strdstnet/utils.binary';
import { Packet } from '../Packet';
export interface IOpenConnectionReplyTwo {
    serverId: bigint;
    address: IAddress;
    mtuSize: number;
}
export declare class OpenConnectionReplyTwo extends Packet<IOpenConnectionReplyTwo> {
    constructor(p?: IOpenConnectionReplyTwo);
}
