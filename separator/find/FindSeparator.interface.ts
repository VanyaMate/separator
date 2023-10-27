import { SeparatorBatchHandler, SeparatorSingleItem } from '../Separator.types';
import {
    FindMostItemFilter,
    FindOneSeparatorOptions,
    FindSeparatorFilter,
    FindSeparatorOptions,
} from './FindSeparator.types';


export interface IFindSeparator {
    first<ItemType> (
        array: ItemType[],
        filter: FindSeparatorFilter<ItemType>,
        options?: FindOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<SeparatorSingleItem<ItemType>>;

    last<ItemType> (
        array: ItemType[],
        filter: FindSeparatorFilter<ItemType>,
        options?: FindOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<SeparatorSingleItem<ItemType>>;

    all<ItemType> (
        array: ItemType[],
        filter: FindSeparatorFilter<ItemType>,
        options?: FindSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;

    max<ItemType> (
        array: ItemType[],
        filter: FindMostItemFilter<ItemType>,
        options?: FindOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<SeparatorSingleItem<ItemType>>;

    min<ItemType> (
        array: ItemType[],
        filter: FindMostItemFilter<ItemType>,
        options?: FindOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<SeparatorSingleItem<ItemType>>;
}