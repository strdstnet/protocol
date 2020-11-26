import { BatchedPacket } from '../bedrock/BatchedPacket';
export declare enum TextType {
    RAW = 0,
    CHAT = 1,
    TRANSLATION = 2,
    POPUP = 3,
    JUKEBOX_POPUP = 4,
    TIP = 5,
    SYSTEM = 6,
    WHISPER = 7,
    ANNOUNCEMENT = 8,
    JSON_WHISPER = 9,
    JSON = 10
}
export interface IText {
    type: TextType;
    needsTranslation: boolean;
    sourceName: string;
    message: string;
    parameters: string[];
    xboxUserId: string;
    platformChatId: string;
}
export declare class Text extends BatchedPacket<IText> {
    constructor(p?: Partial<IText>);
}
