"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
const utils_binary_1 = require("@strdstnet/utils.binary");
function decodeJWT(token) {
    const [, payload] = token.split('.');
    const buffer = Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
    return JSON.parse(buffer.toString());
}
class Login extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.LOGIN, [
            { name: 'protocol', parser: types_1.DataType.INT },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        const sub = data.readByteArray();
                        const chainDataStr = props.chainData = sub.readString(sub.readLInt());
                        const chainData = JSON.parse(chainDataStr);
                        for (const token of chainData.chain) {
                            const payload = decodeJWT(token);
                            if (payload.extraData) {
                                props.username = payload.extraData.displayName;
                                props.XUID = payload.extraData.XUID;
                                props.clientUUID = payload.extraData.identity;
                                props.identityPublicKey = payload.identityPublicKey;
                            }
                        }
                        const clientDataStr = props.clientData = sub.readString(sub.readLInt());
                        const clientData = decodeJWT(clientDataStr);
                        props.clientId = BigInt(clientData.ClientRandomId);
                        props.serverAddress = clientData.ServerAddress;
                        Object.assign(props, clientData);
                    }
                    else {
                        const sub = new utils_binary_1.BinaryData();
                        sub.writeLInt(props.chainData.length);
                        sub.writeString(props.chainData, false);
                        sub.writeLInt(props.clientData.length);
                        sub.writeString(props.clientData, false);
                        data.writeByteArray(sub);
                    }
                },
            },
        ], p);
    }
}
exports.Login = Login;
