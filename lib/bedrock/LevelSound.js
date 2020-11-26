"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelSound = void 0;
const types_1 = require("../types");
const BatchedPacket_1 = require("./BatchedPacket");
class LevelSound extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.LEVEL_SOUND, [
            { name: 'sound', parser: types_1.DataType.U_VARINT },
            { name: 'position', parser: types_1.DataType.VECTOR3 },
            { name: 'extraData', parser: types_1.DataType.VARINT },
            { name: 'entityType', parser: types_1.DataType.STRING },
            { name: 'isBabyMob', parser: types_1.DataType.BOOLEAN },
            { name: 'disableRelativeVolume', parser: types_1.DataType.BOOLEAN },
        ], p);
    }
}
exports.LevelSound = LevelSound;
