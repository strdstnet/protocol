import { BatchedPacket } from '../bedrock/BatchedPacket';
import { CommandPermissions, ICommandArgument } from '../types';
interface ICommand {
    trigger: string;
    description: string;
    permission: CommandPermissions;
    args: ICommandArgument[];
}
interface IAvailableCommands {
    commands: ICommand[];
}
export declare class AvailableCommands extends BatchedPacket<IAvailableCommands> {
    constructor(p?: IAvailableCommands);
}
export {};
