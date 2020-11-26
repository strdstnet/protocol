import { Packet } from '../Packet';
export interface IOpenConnectionRequestOne {
    protocol: number;
    mtuSize: number;
}
export declare class OpenConnectionRequestOne extends Packet<IOpenConnectionRequestOne> {
    constructor(p?: IOpenConnectionRequestOne);
}
