import { BinaryData } from '@strdstnet/utils.binary';
import { DataType } from './types';
export declare enum ParserType {
    ENCODE = 0,
    DECODE = 1
}
export interface IParserArgs<T> {
    type: ParserType;
    data: BinaryData;
    props: T;
    value: any;
    self: Packet<T>;
}
declare type SchemaItemParser<T> = (args: IParserArgs<T>) => void;
export interface IPacketSchemaItem<T> {
    name?: string;
    parser: DataType | SchemaItemParser<T>;
    resolve?: (props: T) => any;
}
interface IPacket {
    id: number;
}
export declare type PacketProps<T> = IPacket & T;
export declare const def: (defVal: any) => (_: any) => any;
export declare abstract class Packet<T> {
    id: number;
    protected schema: Array<IPacketSchemaItem<T>>;
    protected encodeId: boolean;
    protected decodeId: boolean;
    props: T;
    data: BinaryData;
    constructor(id: number, schema: Array<IPacketSchemaItem<T>>, props?: any);
    private validVal;
    encode(props?: T): BinaryData;
    parse(data: BinaryData): this;
}
export {};
