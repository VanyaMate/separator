import { SeparatorBatchHandler } from '../Separator.types';
import { SortSeparatorFilter, SortSeparatorOptions } from './SortSeparator.types';


export interface ISortSeparator {
    filter<ItemType> (
        array: ItemType[],
        filter: SortSeparatorFilter<ItemType>,
        options: SortSeparatorOptions,
        batchCallback?: SeparatorBatchHandler<ItemType>,
    ): Promise<ItemType[]>;
}