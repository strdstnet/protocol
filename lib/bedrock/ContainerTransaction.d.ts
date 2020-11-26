import { BatchedPacket } from './BatchedPacket';
import { ContainerActionSource, ContainerTransactionType, ITransaction } from '../types';
import { IItem } from '@strdstnet/utils.binary';
interface IContainerAction {
    sourceType: ContainerActionSource;
    containerId: number;
    sourceFlags?: number;
    slot: number;
    oldItem: IItem;
    newItem: IItem;
    newItemStackId?: number;
}
interface IChangedSlots {
    containerId: number;
    indexes: number[];
}
interface IContainerTransaction {
    requestId: number;
    requestChangedSlots: IChangedSlots[];
    transactionType: ContainerTransactionType;
    hasItemStackIds: boolean;
    actions: IContainerAction[];
    transaction: ITransaction;
}
export declare class ContainerTransaction extends BatchedPacket<IContainerTransaction> {
    constructor(p?: IContainerTransaction);
}
export {};
