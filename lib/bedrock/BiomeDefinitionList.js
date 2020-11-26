"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomeDefinitionList = void 0;
const Packet_1 = require("../Packet");
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class BiomeDefinitionList extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.BIOME_DEFINITION_LIST, [
            {
                parser({ type, data, props, value }) {
                    if (type === Packet_1.ParserType.ENCODE) {
                        data.append(value);
                    }
                    else {
                        props.biomeDefinitions = data.readRemaining();
                    }
                },
                resolve: () => BiomeDefinitionList.BIOME_DEFINITIONS,
            },
        ], p);
    }
}
exports.BiomeDefinitionList = BiomeDefinitionList;
BiomeDefinitionList.BIOME_DEFINITIONS = fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'data', 'biome_definitions.nbt'));
