import { BatchedPacket } from '../bedrock/BatchedPacket';
import { IClientData } from '../types';
interface ILoginEncode {
    protocol: number;
    chainData: string;
    clientData: string;
}
interface ILogin extends ILoginEncode, IClientData {
    username: string;
    clientUUID: string;
    XUID: string;
    identityPublicKey: string;
    clientId: bigint;
    serverAddress: string;
}
export declare class Login extends BatchedPacket<ILogin> {
    constructor(p?: ILoginEncode);
}
export {};
