import { SeparatorBatchHandler, SeparatorSingleItem } from '../Separator.types';
import { IFindSeparator } from './FindSeparator.interface';
import {
    FindMostItemFilter,
    FindOneSeparatorOptions,
    FindSeparatorFilter,
    FindSeparatorOptions, FindStepOneItem, FindStepOneResponse,
} from './FindSeparator.types';


export default class FindSeparator implements IFindSeparator {
    constructor (private readonly _options?: FindSeparatorOptions) {
    }

    public all<ItemType> (array: ItemType[], filter: FindSeparatorFilter<ItemType>, options?: FindSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<ItemType[]> {
        return Promise.resolve([]);
    }

    public first<ItemType> (array: ItemType[], filter: FindSeparatorFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return new Promise(async (resolve) => {
            let start: number = this._offset(options);
            for await (const result of this._stepsOne(array, start, filter)) {
                if (result.finish) {
                    resolve([ result.index, result.item ]);
                }
            }
        });
    }

    public last<ItemType> (array: ItemType[], filter: FindSeparatorFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve([ -1, null ]);
    }

    public max<ItemType> (array: ItemType[], filter: FindMostItemFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve([ -1, null ]);
    }

    public min<ItemType> (array: ItemType[], filter: FindMostItemFilter<ItemType>, options?: FindOneSeparatorOptions, batchCallback?: SeparatorBatchHandler<ItemType>): Promise<SeparatorSingleItem<ItemType>> {
        return Promise.resolve([ -1, null ]);
    }

    private async* _stepsOne<ItemType> (array: ItemType[], start: number, filter: FindSeparatorFilter<ItemType>): FindStepOneResponse<ItemType> {
        for (let i: number = start; i < array.length; i++) {
            const item: ItemType = array[i];
            if (
                typeof filter === 'function'
                ? filter(item)
                : Object.entries(filter).every(([ key, value ]) => item[key as keyof ItemType] === value)
            ) {
                console.log('');
                yield {
                    finish: true,
                    index : i,
                    item  : item,
                };
            }
        }

        yield {
            finish: false,
            index : -1,
            item  : null,
        };
    }

    private _offset (options: FindOneSeparatorOptions | undefined): number {
        return options?.skip ?? this._options?.skip ?? 0;
    }
}