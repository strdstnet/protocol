"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRequest = void 0;
const BatchedPacket_1 = require("../bedrock/BatchedPacket");
const types_1 = require("../types");
class FormRequest extends BatchedPacket_1.BatchedPacket {
    constructor(p) {
        super(types_1.Packets.FORM_REQUEST, [
            { name: 'formId', parser: types_1.DataType.U_VARINT },
            { name: 'formData', parser: types_1.DataType.STRING },
        ], p);
    }
}
exports.FormRequest = FormRequest;
