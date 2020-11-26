"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAK = void 0;
const types_1 = require("../types");
const Acknowledgement_1 = require("./Acknowledgement");
class NAK extends Acknowledgement_1.Acknowledgement {
    constructor(sequences) {
        super(types_1.Packets.NAK, sequences);
    }
}
exports.NAK = NAK;
