"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockUpdate = exports.BlockUpdateDataLayer = exports.BlockUpdateFlags = void 0;
const types_1 = require("../types");
const BatchedPacket_1 = require("./BatchedPacket");
var BlockUpdateFlags;
(function (BlockUpdateFlags) {
    BlockUpdateFlags[BlockUpdateFlags["NONE"] = 0] = "NONE";
    BlockUpdateFlags[BlockUpdateFlags["NEIGHBORS"] = 1] = "NEIGHBORS";
    BlockUpdateFlags[BlockUpdateFlags["NETWORK"] = 2] = "NETWORK";
    BlockUpdateFlags[BlockUpdateFlags["NOGRAPHIC"] = 4] = "NOGRAPHIC";
    BlockUpdateFlags[BlockUpdateFlags["PRIORITY"] = 8] = "PRIORITY";
})(BlockUpdateFlags = exports.BlockUpdateFlags || (exports.BlockUpdateFlags = {}));
var BlockUpdateDataLayer;
(function (BlockUpdateDataLayer) {
    BlockUpdateDataLayer[BlockUpdateDataLayer["NORMAL"] = 0] = "NORMAL";
    BlockUpdateDataLayer[BlockUpdateDataLayer["LIQUID"] = 1] = "LIQUID";
})(BlockUpdateDataLayer = exports.BlockUpdateDataLayer || (exports.BlockUpdateDataLayer = {}));
class BlockUpdate extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.BLOCK_UPDATE, [
            { name: 'position', parser: types_1.DataType.BLOCK_POSITION },
            { name: 'blockRuntimeId', parser: types_1.DataType.U_VARINT },
            { name: 'flags', parser: types_1.DataType.U_VARINT, resolve: () => BlockUpdateFlags.NONE },
            { name: 'dataLayer', parser: types_1.DataType.U_VARINT, resolve: () => BlockUpdateDataLayer.NORMAL },
        ], p);
    }
}
exports.BlockUpdate = BlockUpdate;
