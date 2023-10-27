import { SeparatorBatchHandler, SeparatorSingleItem } from '../Separator.types';
import { IFindSeparator } from './FindSeparator.interface';
import {
    FindMostItemFilter,
    FindOneSeparatorOptions,
    FindSeparatorFilter,
    FindSeparatorOptions,
} from './FindSeparator.types';


export default class FindSeparator implements IFindSeparator {
    public all<ItemType> (array: ItemType[], filter: FindSeparatorFilter<ItemType>, options?: FindSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

    public first<ItemType> (array: ItemType[], filter: FindSeparatorFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve(undefined);
    }

    public last<ItemType> (array: ItemType[], filter: FindSeparatorFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve(undefined);
    }

    public max<ItemType> (array: ItemType[], filter: FindMostItemFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve(undefined);
    }

    public min<ItemType> (array: ItemType[], filter: FindMostItemFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve(undefined);
    }

}