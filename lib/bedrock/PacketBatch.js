"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketBatch = void 0;
const UnknownBatchedPacket_1 = require("../custom/UnknownBatchedPacket");
const Packet_1 = require("../Packet");
const BundledPacket_1 = require("../raknet/BundledPacket");
const ChangeDimension_1 = require("./ChangeDimension");
const ChunkRadiusUpdated_1 = require("./ChunkRadiusUpdated");
const Login_1 = require("./Login");
const PacketViolationWarning_1 = require("./PacketViolationWarning");
const PlayStatus_1 = require("./PlayStatus");
const ResourcePacksInfo_1 = require("./ResourcePacksInfo");
const ResourcePacksResponse_1 = require("./ResourcePacksResponse");
const SetTitle_1 = require("./SetTitle");
const StartGame_1 = require("./StartGame");
const Text_1 = require("./Text");
const Transfer_1 = require("./Transfer");
const MovePlayer_1 = require("./MovePlayer");
const CommandRequest_1 = require("./CommandRequest");
const Interact_1 = require("./Interact");
const PlayerAction_1 = require("./PlayerAction");
const Animate_1 = require("./Animate");
const EntityFall_1 = require("./EntityFall");
const LevelSound_1 = require("./LevelSound");
const Emote_1 = require("./Emote");
const ContainerClose_1 = require("./ContainerClose");
const ContainerTransaction_1 = require("./ContainerTransaction");
const EntityEquipment_1 = require("./EntityEquipment");
const EntityAnimation_1 = require("./EntityAnimation");
const Respawn_1 = require("./Respawn");
const TickSync_1 = require("./TickSync");
const RequestChunkRadius_1 = require("./RequestChunkRadius");
const types_1 = require("../types");
const utils_binary_1 = require("@strdstnet/utils.binary");
class PacketBatch extends BundledPacket_1.BundledPacket {
    constructor(p) {
        super(types_1.Packets.PACKET_BATCH, [
            {
                parser({ type, data, props }) {
                    if (type === Packet_1.ParserType.DECODE) {
                        props.packets = [];
                        const buffer = utils_binary_1.BinaryData.inflate(data.readRemaining());
                        while (!buffer.feof) {
                            const length = buffer.readUnsignedVarInt();
                            const buf = new utils_binary_1.BinaryData(buffer.read(length));
                            const header = buf.readUnsignedVarInt();
                            const packetId = header & PacketBatch.PID_MASK;
                            let packet = null;
                            // TODO: Make automatic, somehow
                            switch (packetId) {
                                case types_1.Packets.LOGIN:
                                    packet = new Login_1.Login();
                                    break;
                                case types_1.Packets.PLAY_STATUS:
                                    packet = new PlayStatus_1.PlayStatus();
                                    break;
                                case types_1.Packets.TRANSFER:
                                    packet = new Transfer_1.Transfer();
                                    break;
                                case types_1.Packets.CHANGE_DIMENSION:
                                    packet = new ChangeDimension_1.ChangeDimension();
                                    break;
                                case types_1.Packets.PACKET_VIOLATION_WARNING:
                                    packet = new PacketViolationWarning_1.PacketViolationWarning();
                                    break;
                                case types_1.Packets.SET_TITLE:
                                    packet = new SetTitle_1.SetTitle();
                                    break;
                                case types_1.Packets.RESOURCE_PACKS_INFO:
                                    packet = new ResourcePacksInfo_1.ResourcePacksInfo();
                                    break;
                                case types_1.Packets.RESOURCE_PACKS_RESPONSE:
                                    packet = new ResourcePacksResponse_1.ResourcePacksResponse();
                                    break;
                                case types_1.Packets.START_GAME:
                                    packet = new StartGame_1.StartGame();
                                    break;
                                case types_1.Packets.REQUEST_CHUNK_RADIUS:
                                    packet = new RequestChunkRadius_1.RequestChunkRadius();
                                    break;
                                case types_1.Packets.CHUNK_RADIUS_UPDATED:
                                    packet = new ChunkRadiusUpdated_1.ChunkRadiusUpdated();
                                    break;
                                case types_1.Packets.TEXT:
                                    packet = new Text_1.Text();
                                    break;
                                case types_1.Packets.MOVE_PLAYER:
                                    packet = new MovePlayer_1.MovePlayer();
                                    break;
                                case types_1.Packets.COMMAND_REQUEST:
                                    packet = new CommandRequest_1.CommandRequest();
                                    break;
                                case types_1.Packets.INTERACT:
                                    packet = new Interact_1.Interact();
                                    break;
                                case types_1.Packets.PLAYER_ACTION:
                                    packet = new PlayerAction_1.PlayerAction();
                                    break;
                                case types_1.Packets.ANIMATE:
                                    packet = new Animate_1.Animate();
                                    break;
                                case types_1.Packets.ENTITY_FALL:
                                    packet = new EntityFall_1.EntityFall();
                                    break;
                                case types_1.Packets.LEVEL_SOUND:
                                    packet = new LevelSound_1.LevelSound();
                                    break;
                                case types_1.Packets.EMOTE:
                                    packet = new Emote_1.Emote();
                                    break;
                                case types_1.Packets.CONTAINER_CLOSE:
                                    packet = new ContainerClose_1.ContainerClose();
                                    break;
                                case types_1.Packets.CONTAINER_TRANSACTION:
                                    packet = new ContainerTransaction_1.ContainerTransaction();
                                    break;
                                case types_1.Packets.ENTITY_EQUIPMENT:
                                    packet = new EntityEquipment_1.EntityEquipment();
                                    break;
                                case types_1.Packets.ENTITY_ANIMATION:
                                    packet = new EntityAnimation_1.EntityAnimation();
                                    break;
                                case types_1.Packets.RESPAWN:
                                    packet = new Respawn_1.Respawn();
                                    break;
                                case types_1.Packets.TICK_SYNC:
                                    packet = new TickSync_1.TickSync();
                                    break;
                                default:
                                    packet = new UnknownBatchedPacket_1.UnknownBatchedPacket(packetId, []);
                            }
                            if (packet) {
                                packet.parse(buf);
                                props.packets.push(packet);
                            }
                        }
                    }
                    else {
                        const uncompressed = new utils_binary_1.BinaryData();
                        if (!Array.isArray(props.packets)) {
                            console.log(props);
                            throw new Error('wot');
                        }
                        for (const packet of props.packets) {
                            const packetData = new utils_binary_1.BinaryData();
                            packetData.writeUnsignedVarInt(packet.id |
                                (PacketBatch.senderSubId << PacketBatch.SENDER_SUBCLIENT_ID_SHIFT) |
                                (PacketBatch.recipientSubId << PacketBatch.RECIPIENT_SUBCLIENT_ID_SHIFT));
                            packetData.append(packet.encode().toBuffer());
                            uncompressed.writeUnsignedVarInt(packetData.length);
                            uncompressed.append(packetData.toBuffer());
                        }
                        data.append(utils_binary_1.BinaryData.deflate(uncompressed.toBuffer()).toBuffer());
                    }
                },
            },
        ], {
            ...BundledPacket_1.BundledPacket.defaultProps,
            ...p,
        });
    }
}
exports.PacketBatch = PacketBatch;
PacketBatch.PID_MASK = 0x3ff;
PacketBatch.SENDER_SUBCLIENT_ID_SHIFT = 0x0A;
PacketBatch.RECIPIENT_SUBCLIENT_ID_SHIFT = 0x0C;
PacketBatch.senderSubId = 0;
PacketBatch.recipientSubId = 0;
