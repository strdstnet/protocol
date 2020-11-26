"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandRequest = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class CommandRequest extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.COMMAND_REQUEST, [
            { name: 'command', parser: types_1.DataType.STRING },
            { name: 'originType', parser: types_1.DataType.U_VARINT },
            { name: 'originUUID', parser: types_1.DataType.UUID },
            { name: 'requestId', parser: types_1.DataType.STRING },
            { name: 'internal', parser: types_1.DataType.BOOLEAN },
        ], p);
    }
}
exports.CommandRequest = CommandRequest;
