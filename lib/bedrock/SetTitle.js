"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTitle = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class SetTitle extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.SET_TITLE, [
            { name: 'command', parser: types_1.DataType.VARINT },
            { name: 'text', parser: types_1.DataType.STRING, resolve: props => props.text || '' },
            { name: 'fadeInTime', parser: types_1.DataType.VARINT, resolve: props => props.fadeInTime || 0 },
            { name: 'stayTime', parser: types_1.DataType.VARINT, resolve: props => props.stayTime || 0 },
            { name: 'fadeOutTime', parser: types_1.DataType.VARINT, resolve: props => props.fadeOutTime || 0 },
        ], p);
    }
}
exports.SetTitle = SetTitle;
