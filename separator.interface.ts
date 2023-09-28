export type SeparatorOption = {
    maxOperationsPerStep: number;
}

export type AdditionalSeparatorOption<R> =
    SeparatorOption
    & {
        temp: R[],
        start: number
    };

export interface ISeparator {
    map<T, R> (array: T[], mapCallback: (T) => R, options: SeparatorOption): Promise<R[]>;

    filter<T> (array: T[], filterCallback: (T) => boolean, options: SeparatorOption): Promise<T[]>;

    sort<T> (array: T[], sortParam: [ keyof T, 'asc' | 'desc' ], options: SeparatorOption): Promise<T[]>;
}