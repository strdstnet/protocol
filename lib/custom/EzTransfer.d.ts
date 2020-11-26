import { BinaryData } from '@strdstnet/utils.binary';
import { Packet } from '../Packet';
interface IEzTransfer {
    serverType: string;
    clientId: bigint;
    sequenceNumber: number;
    loginData: BinaryData;
}
export declare class EzTransfer extends Packet<IEzTransfer> {
    props: IEzTransfer;
    constructor(props: IEzTransfer);
}
export {};
