import {
    SEPARATOR_DEFAULT_BATCH_MODE, SEPARATOR_DEFAULT_BATCH_SIZE,
    SEPARATOR_DEFAULT_MAX_OPERATIONS,
} from '../Separator.const.ts';
import { SeparatorBatchHandler, SeparatorSingleItem } from '../Separator.types';
import { IFindSeparator } from './FindSeparator.interface';
import {
    FindMostItemFilter,
    FindOneSeparatorOptions,
    FindSeparatorFilter, FindSeparatorFilterObject,
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
            for await (const result of this._stepsOne(array, start, filter, this._optionsOne(options))) {
                if (batchCallback) {
                    batchCallback({
                        items : result.item ? [ result.item ] : [],
                        all   : array.length,
                        passed: result.index,
                    });
                }
                if (result.finish) {
                    resolve([ result.index, result.item ]);
                    return;
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

    private async* _stepsOne<ItemType> (array: ItemType[], start: number, filter: FindSeparatorFilter<ItemType>, options: FindOneSeparatorOptions): FindStepOneResponse<ItemType> {
        let steps: number = 0;
        for (let i: number = start; i < array.length; i++) {
            console.log('_step_', i);
            const item: ItemType = array[i];
            if (this._filter(filter, item)) {
                yield {
                    finish: true,
                    index : i,
                    item  : item,
                };
            }
            steps++;
            if (steps === options.maxOperations) {
                steps = 0;
                yield {
                    finish: false,
                    index : i,
                    item  : null,
                };
            }
        }

        yield {
            finish: true,
            index : -1,
            item  : null,
        };
    }

    private _filter<ItemType> (filter: FindSeparatorFilter<ItemType>, item: ItemType): boolean {
        return typeof filter === 'function'
               ? filter(item)
               : this._filterByObject(filter, item);
    }

    private _filterByObject<ItemType> (filter: FindSeparatorFilterObject<ItemType>, item: ItemType): boolean {
        return Object.entries(filter).every(([ key, value ]) => item[key as keyof ItemType] === value);
    }

    private _offset (options: FindOneSeparatorOptions | undefined): number {
        return options?.skip ?? this._options?.skip ?? 0;
    }

    private _optionsOne (options?: FindOneSeparatorOptions): FindOneSeparatorOptions {
        return {
            maxOperations: SEPARATOR_DEFAULT_MAX_OPERATIONS,
            batchMode    : SEPARATOR_DEFAULT_BATCH_MODE,
            batchSize    : SEPARATOR_DEFAULT_BATCH_SIZE,
            response     : true,
            skip         : 0,
            ...(options ?? {}),
        };
    }
}