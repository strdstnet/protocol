"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Packet = exports.def = exports.ParserType = void 0;
const utils_binary_1 = require("@strdstnet/utils.binary");
const types_1 = require("./types");
var ParserType;
(function (ParserType) {
    ParserType[ParserType["ENCODE"] = 0] = "ENCODE";
    ParserType[ParserType["DECODE"] = 1] = "DECODE";
})(ParserType = exports.ParserType || (exports.ParserType = {}));
const def = (defVal) => (_) => defVal;
exports.def = def;
const encodeDataType = (data, type, value, p) => {
    if (type === types_1.DataType.MAGIC) {
        return data.writeMagic();
    }
    if (typeof value === 'undefined') {
        console.log('UNDEFINED', value, p);
        return;
    }
    switch (type) {
        case types_1.DataType.BYTE:
            return data.writeByte(value);
        case types_1.DataType.LONG:
            return data.writeLong(value);
        case types_1.DataType.SHORT:
            return data.writeShort(value);
        case types_1.DataType.L_SHORT:
            return data.writeLShort(value);
        case types_1.DataType.STRING:
            return data.writeString(value, true);
        case types_1.DataType.RAW_STRING:
            data.writeShort(value.length);
            return data.writeString(value, false);
        case types_1.DataType.BOOLEAN:
            return data.writeBoolean(value);
        case types_1.DataType.ADDRESS:
            return data.writeAddress(value);
        case types_1.DataType.L_TRIAD:
            return data.writeLTriad(value);
        case types_1.DataType.INT:
            return data.writeInt(value);
        case types_1.DataType.VECTOR3_VARINT:
            return data.writeVector3VarInt(value);
        case types_1.DataType.VECTOR3_FLOAT:
            return data.writeVector3Float(value);
        case types_1.DataType.VECTOR3:
            return data.writeVector3(value);
        case types_1.DataType.VARINT:
            return data.writeVarInt(value);
        case types_1.DataType.U_VARLONG:
            return data.writeUnsignedVarLong(value);
        case types_1.DataType.U_VARINT:
            return data.writeUnsignedVarInt(value);
        case types_1.DataType.VARLONG:
            return data.writeVarLong(value);
        case types_1.DataType.FLOAT:
        case types_1.DataType.L_FLOAT:
            return data.writeFloat(value);
        case types_1.DataType.L_INT:
            return data.writeLInt(value);
        case types_1.DataType.L_LONG:
            return data.writeLLong(value);
        case types_1.DataType.CONTAINER_ITEM:
            return data.writeContainerItem(value);
        // case DataType.CHUNK:
        //   return data.writeChunk(value)
        case types_1.DataType.UUID:
            return data.writeUUID(value);
        case types_1.DataType.ENTITY_METADATA:
            return data.writeEntityMetadata(value);
        case types_1.DataType.BYTE_ROTATION:
            return data.writeByteRotation(value);
        case types_1.DataType.BLOCK_POSITION:
            return data.writeBlockPosition(value);
        case types_1.DataType.BYTE_ARRAY:
            return data.writeByteArray(value);
        default:
            console.error('Unknown DataType on write:', type);
    }
};
const decodeDataType = (data, type) => {
    switch (type) {
        case types_1.DataType.BYTE:
            return data.readByte();
        case types_1.DataType.LONG:
            return data.readLong();
        case types_1.DataType.MAGIC:
            return data.readMagic();
        case types_1.DataType.SHORT:
            return data.readShort();
        case types_1.DataType.SECURITY:
            return data.readSecuity();
        case types_1.DataType.BOOLEAN:
            return data.readBoolean();
        case types_1.DataType.RAW_STRING:
            return data.readString(data.readShort());
        case types_1.DataType.ADDRESS:
            return data.readAddress();
        case types_1.DataType.L_TRIAD:
            return data.readLTriad();
        case types_1.DataType.INT:
            return data.readInt();
        case types_1.DataType.STRING:
            return data.readString();
        case types_1.DataType.L_SHORT:
            return data.readLShort();
        case types_1.DataType.VARINT:
            return data.readVarInt();
        case types_1.DataType.VECTOR3:
            return data.readVector3();
        case types_1.DataType.U_VARLONG:
            return data.readUnsignedVarLong();
        case types_1.DataType.U_VARINT:
            return data.readUnsignedVarInt();
        case types_1.DataType.VARLONG:
            return data.readVarLong();
        case types_1.DataType.FLOAT:
        case types_1.DataType.L_FLOAT:
            return data.readFloat();
        case types_1.DataType.L_INT:
            return data.readLInt();
        case types_1.DataType.L_LONG:
            return data.readLLong();
        case types_1.DataType.UUID:
            return data.readUUID();
        case types_1.DataType.ENTITY_METADATA:
            return data.readEntityMetadata();
        case types_1.DataType.CONTAINER_ITEM:
            return data.readContainerItem();
        case types_1.DataType.BYTE_ROTATION:
            return data.readByteRotation();
        case types_1.DataType.BLOCK_POSITION:
            return data.readBlockPosition();
        case types_1.DataType.BYTE_ARRAY:
            return data.readByteArray();
        default:
            console.error('Unknown DataType on read:', type);
    }
};
class Packet {
    constructor(id, schema, props) {
        this.id = id;
        this.schema = schema;
        this.encodeId = true;
        this.decodeId = true;
        this.props = {};
        if (props)
            this.props = Object.assign({}, props);
    }
    validVal(val) {
        return typeof val !== 'undefined' && val !== null;
    }
    encode(props = {}) {
        const data = new utils_binary_1.BinaryData();
        if (this.encodeId)
            data.writeByte(this.id);
        if (!this.props)
            this.props = {};
        Object.assign(this.props, props);
        this.schema.forEach(({ name, parser, resolve }) => {
            const propsVal = name && this.validVal(this.props[name]) ? this.props[name] : null;
            const value = this.validVal(propsVal) ? propsVal : (resolve ? resolve(this.props) : null);
            if (typeof parser === 'function') {
                parser({
                    type: ParserType.ENCODE,
                    data,
                    props: this.props,
                    value,
                    self: this,
                });
            }
            else {
                encodeDataType(data, parser, value, name);
            }
        });
        this.data = data;
        return data;
    }
    parse(data) {
        this.data = data;
        const props = this.props || {};
        this.id = (this.decodeId ? data.readByte() : this.id);
        this.schema.forEach(({ name, parser }) => {
            if (typeof parser === 'function') {
                parser({
                    type: ParserType.DECODE,
                    data,
                    props: props,
                    value: null,
                    self: this,
                });
            }
            else {
                const result = decodeDataType(data, parser);
                if (name)
                    props[name] = result;
            }
        });
        this.props = props;
        this.data = data.clone();
        return this;
    }
}
exports.Packet = Packet;
