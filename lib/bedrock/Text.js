"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.TextType = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
var TextType;
(function (TextType) {
    TextType[TextType["RAW"] = 0] = "RAW";
    TextType[TextType["CHAT"] = 1] = "CHAT";
    TextType[TextType["TRANSLATION"] = 2] = "TRANSLATION";
    TextType[TextType["POPUP"] = 3] = "POPUP";
    TextType[TextType["JUKEBOX_POPUP"] = 4] = "JUKEBOX_POPUP";
    TextType[TextType["TIP"] = 5] = "TIP";
    TextType[TextType["SYSTEM"] = 6] = "SYSTEM";
    TextType[TextType["WHISPER"] = 7] = "WHISPER";
    TextType[TextType["ANNOUNCEMENT"] = 8] = "ANNOUNCEMENT";
    TextType[TextType["JSON_WHISPER"] = 9] = "JSON_WHISPER";
    TextType[TextType["JSON"] = 10] = "JSON";
})(TextType = exports.TextType || (exports.TextType = {}));
class Text extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.TEXT, [
            { name: 'type', parser: types_1.DataType.BYTE },
            { name: 'needsTranslation', parser: types_1.DataType.BOOLEAN, resolve: (props) => props.type === TextType.TRANSLATION },
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.parameters = [];
                        props.sourceName = '';
                        switch (props.type) {
                            case TextType.CHAT:
                            case TextType.WHISPER:
                            case TextType.ANNOUNCEMENT:
                                props.sourceName = data.readString();
                            case TextType.RAW:
                            case TextType.TIP:
                            case TextType.SYSTEM:
                            case TextType.JSON_WHISPER:
                            case TextType.JSON:
                                props.message = data.readString();
                                break;
                            case TextType.TRANSLATION:
                            case TextType.POPUP:
                            case TextType.JUKEBOX_POPUP:
                                props.message = data.readString();
                                const count = data.readUnsignedVarInt();
                                for (let i = 0; i < count; i++) {
                                    props.parameters.push(data.readString());
                                }
                                break;
                            default:
                                throw new Error(`Unknown TextType ${props.type} (DECODE)`);
                        }
                    }
                    else {
                        switch (props.type) {
                            case TextType.CHAT:
                            case TextType.WHISPER:
                            case TextType.ANNOUNCEMENT:
                                data.writeString(props.sourceName);
                            case TextType.RAW:
                            case TextType.TIP:
                            case TextType.SYSTEM:
                            case TextType.JSON_WHISPER:
                            case TextType.JSON:
                                data.writeString(props.message);
                                break;
                            case TextType.TRANSLATION:
                            case TextType.POPUP:
                            case TextType.JUKEBOX_POPUP:
                                data.writeString(props.message);
                                data.writeUnsignedVarInt(props.parameters.length);
                                for (const param of props.parameters) {
                                    data.writeString(param);
                                }
                                break;
                            default:
                                throw new Error(`Unknown TextType ${props.type} (ENCODE)`);
                        }
                    }
                },
            },
            { name: 'xboxUserId', parser: types_1.DataType.STRING, resolve: () => '' },
            { name: 'platformChatId', parser: types_1.DataType.STRING, resolve: () => '' },
        ], p);
    }
}
exports.Text = Text;
