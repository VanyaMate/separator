import {
    AdditionalSeparatorOption,
    ISeparator,
    SeparatorOption, SortSeparatorOption,
} from './separator.interface';


export class Separator implements ISeparator {
    findFirst<T> (array: T[], searchCallback: (item: T) => boolean, options: SeparatorOption): Promise<T> {
        return this._recallFindFirst(array, searchCallback, {
            maxOperationsPerStep: options.maxOperationsPerStep,
            start               : 0,
            temp                : [],
        });
    }

    map<T, R> (array: T[], mapCallback: (item: T) => R, options: SeparatorOption): Promise<R[]> {
        return this._recallMap<T, R>(array, mapCallback, {
            maxOperationsPerStep: options.maxOperationsPerStep,
            temp                : [],
            start               : 0,
        });
    }

    filter<T> (array: T[], filterCallback: (item: T) => boolean, options: SeparatorOption): Promise<T[]> {
        return this._recallFilter<T>(array, filterCallback, {
            maxOperationsPerStep: options.maxOperationsPerStep,
            temp                : [],
            start               : 0,
        });
    }

    sort<T> (array: T[], sortParam: [ keyof T, ('asc' | 'desc') ], options: SeparatorOption): Promise<T[]> {
        return this._recallSort<T>(array, sortParam, {
            maxOperationsPerStep: options.maxOperationsPerStep,
            temp                : [ ...array ],
            sorted              : 0,
            checked             : 0,
            max                 : null,
        });
    }

    private _recallMap<T, R> (array: T[], mapCallback: (item: T) => R, options: AdditionalSeparatorOption<R>): Promise<R[]> {
        return new Promise<R[]>((resolve) => {
            setTimeout(() => {
                const remainingOperations: number = array.length - options.start;
                const stepOperations: number      = remainingOperations >= options.maxOperationsPerStep
                                                    ? options.maxOperationsPerStep
                                                    : remainingOperations;
                const start: number               = options.start;
                const finish: number              = start + stepOperations;
                const newStart: number            = options.start + stepOperations;
                for (let i: number = start; i < finish; i++) {
                    options.temp.push(mapCallback(array[i]));
                }
                if (newStart !== array.length) {
                    resolve(this._recallMap(array, mapCallback, {
                        ...options, start: newStart,
                    }));
                } else {
                    resolve(options.temp);
                }
            }, 0);
        });
    }

    private _recallFindFirst<T> (array: T[], searchCallback: (item: T) => boolean, options: AdditionalSeparatorOption<T>): Promise<T | null> {
        return new Promise<T | null>((resolve) => {
            setTimeout(() => {
                const remainingOperations: number = array.length - options.start;
                const stepOperations: number      = remainingOperations >= options.maxOperationsPerStep
                                                    ? options.maxOperationsPerStep
                                                    : remainingOperations;
                const start: number               = options.start;
                const finish: number              = start + stepOperations;
                const newStart: number            = options.start + stepOperations;
                for (let i: number = start; i < finish; i++) {
                    const item: T = array[i];
                    searchCallback(item) && resolve(item);
                }
                if (newStart !== array.length) {
                    resolve(this._recallFindFirst(array, searchCallback, {
                        ...options, start: newStart,
                    }));
                } else {
                    resolve(null);
                }
            }, 0);
        });
    }

    private _recallFilter<T> (array: T[], filterCallback: (item: T) => boolean, options: AdditionalSeparatorOption<T>): Promise<T[]> {
        return new Promise<T[]>((resolve) => {
            setTimeout(() => {
                const remainingOperations: number = array.length - options.start;
                const stepOperations: number      = remainingOperations >= options.maxOperationsPerStep
                                                    ? options.maxOperationsPerStep
                                                    : remainingOperations;
                const start: number               = options.start;
                const finish: number              = start + stepOperations;
                const newStart: number            = options.start + stepOperations;
                for (let i: number = start; i < finish; i++) {
                    const item: T = array[i];
                    filterCallback(item) && options.temp.push(item);
                }
                if (newStart !== array.length) {
                    resolve(this._recallFilter(array, filterCallback, {
                        ...options, start: newStart,
                    }));
                } else {
                    resolve(options.temp);
                }
            }, 0);
        });
    }

    private _recallSort<T> (array: T[], sortParam: [ keyof T, ('asc' | 'desc') ], options: SortSeparatorOption<T>): Promise<T[]> {
        return new Promise<T[]>((resolve) => {
            setTimeout(() => {
                // TODO: Add sort function
                const remainingOperations: number = options.sorted;
                const stepOperations: number      = remainingOperations >= options.maxOperationsPerStep
                                                    ? options.maxOperationsPerStep
                                                    : remainingOperations;
                //
                resolve(array);
            }, 0);
        });
    }
}