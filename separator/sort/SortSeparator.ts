import { SeparatorBatchHandler } from '../Separator.types';
import { ISortSeparator } from './SortSeparator.interface';
import { SortSeparatorFilter, SortSeparatorOptions } from './SortSeparator.types';


export default class SortSeparator implements ISortSeparator {
    public filter<ItemType> (array: ItemType[], filter: SortSeparatorFilter<ItemType>, options: SortSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }
}