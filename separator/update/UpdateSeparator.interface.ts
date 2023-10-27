import { SeparatorBatchHandler } from '../Separator.types';
import {
    UpdateOneSeparatorOptions,
    UpdateSeparatorFilter,
    UpdateSeparatorMethod, UpdateSeparatorOptions,
} from './UpdateSeparator.types';


export interface IUpdateSeparator {
    first<ItemType> (
        array: ItemType[],
        filter: UpdateSeparatorFilter<ItemType>,
        updateMethod: UpdateSeparatorMethod<ItemType>,
        options?: UpdateOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;

    last<ItemType> (
        array: ItemType[],
        filter: UpdateSeparatorFilter<ItemType>,
        updateMethod: UpdateSeparatorMethod<ItemType>,
        options?: UpdateOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;

    all<ItemType> (
        array: ItemType[],
        filter: UpdateSeparatorFilter<ItemType>,
        updateMethod: UpdateSeparatorMethod<ItemType>,
        options?: UpdateSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;
}