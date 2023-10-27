import { SeparatorBatchHandler } from '../Separator.types';
import { IDeleteSeparator } from './DeleteSeparator.interface';
import {
    DeleteOneSeparatorOptions,
    DeleteSeparatorFilter,
    DeleteSeparatorOptions,
} from './DeleteSeparator.types';


export default class DeleteSeparator implements IDeleteSeparator {
    public all<ItemType> (array: ItemType[], filter: DeleteSeparatorFilter<ItemType>, options: DeleteSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

    public first<ItemType> (array: ItemType[], filter: DeleteSeparatorFilter<ItemType>, options?: DeleteOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

    public last<ItemType> (array: ItemType[], filter: DeleteSeparatorFilter<ItemType>, options?: DeleteOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

}