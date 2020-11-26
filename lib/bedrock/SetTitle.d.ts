import { BatchedPacket } from '../bedrock/BatchedPacket';
import { TitleCommand } from '../types';
interface ISetTitle {
    command: TitleCommand;
    text?: string;
    fadeInTime?: number;
    stayTime?: number;
    fadeOutTime?: number;
}
export declare class SetTitle extends BatchedPacket<ISetTitle> {
    constructor(p?: ISetTitle);
}
export {};
