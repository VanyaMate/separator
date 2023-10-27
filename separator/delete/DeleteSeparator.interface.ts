import { SeparatorBatchHandler } from '../Separator.types';
import {
    DeleteOneSeparatorOptions,
    DeleteSeparatorFilter,
    DeleteSeparatorOptions,
} from './DeleteSeparator.types';


export interface IDeleteSeparator {
    first<ItemType> (
        array: ItemType[],
        filter: DeleteSeparatorFilter<ItemType>,
        options?: DeleteOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;

    last<ItemType> (
        array: ItemType[],
        filter: DeleteSeparatorFilter<ItemType>,
        options?: DeleteOneSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;

    all<ItemType> (
        array: ItemType[],
        filter: DeleteSeparatorFilter<ItemType>,
        options: DeleteSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;
}