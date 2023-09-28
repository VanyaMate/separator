import {
    AdditionalSeparatorOption,
    ISeparator,
    SeparatorOption,
} from './separator.interface';


export class Separator implements ISeparator {
    map<T, R> (array: T[], mapCallback: (T) => R, options: SeparatorOption): Promise<R[]> {
        return this._recallMap(array, mapCallback, {
            maxOperationsPerStep: options.maxOperationsPerStep,
            temp                : [],
            start               : 0,
        });
    }

    filter<T> (array: T[], filterCallback: (T) => boolean, options: SeparatorOption): Promise<T[]> {
        return Promise.resolve([]);
    }

    sort<T> (array: T[], sortParam: [ keyof T, ('asc' | 'desc') ], options: SeparatorOption): Promise<T[]> {
        return Promise.resolve([]);
    }

    private _recallMap<T, R> (array: T[], mapCallback: (T) => R, options: AdditionalSeparatorOption<R>): Promise<R[]> {
        return new Promise<R[]>((resolve) => {
            setTimeout(() => {
                const remainingOperations: number = array.length - options.start;
                const stepOperations: number      = remainingOperations >= options.maxOperationsPerStep
                                                    ? options.maxOperationsPerStep
                                                    : remainingOperations;
                const start: number               = options.start;
                const finish: number              = start + stepOperations;
                for (let i: number = start; i < finish; i++) {
                    options.temp.push(mapCallback(array[i]));
                }
                const newStart: number = options.start + stepOperations;
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
}

const separator = new Separator();

separator
    .map<number, string>(new Array(1000200).fill(0), (number: number) => number.toString(), {
        maxOperationsPerStep: 10000,
    })
    .then((data) => console.log(data.length));