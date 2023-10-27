import { SeparatorBatchHandler } from '../Separator.types';
import { IUpdateSeparator } from './UpdateSeparator.interface';
import {
    UpdateOneSeparatorOptions,
    UpdateSeparatorFilter,
    UpdateSeparatorMethod,
    UpdateSeparatorOptions,
} from './UpdateSeparator.types';


export default class UpdateSeparator implements IUpdateSeparator {
    public all<ItemType> (array: ItemType[], filter: UpdateSeparatorFilter<ItemType>, updateMethod: UpdateSeparatorMethod<ItemType>, options?: UpdateSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

    public first<ItemType> (array: ItemType[], filter: UpdateSeparatorFilter<ItemType>, updateMethod: UpdateSeparatorMethod<ItemType>, options?: UpdateOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

    public last<ItemType> (array: ItemType[], filter: UpdateSeparatorFilter<ItemType>, updateMethod: UpdateSeparatorMethod<ItemType>, options?: UpdateOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

}