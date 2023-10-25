export type SeparatorOption = {
    maxOperationsPerStep: number;
}

export type AdditionalSeparatorOption<R> =
    SeparatorOption
    & {
    temp: R[],
    start: number
};

export type SortSeparatorOption<T> =
    SeparatorOption
    & {
    temp: T[],
    max: T | null,
    sorted: number,
    checked: number,
}

export interface ISeparator {
    findFirst<T> (array: T[], searchCallback: (item: T) => boolean, options: SeparatorOption): Promise<T | null>;

    map<T, R> (array: T[], mapCallback: (item: T) => R, options: SeparatorOption): Promise<R[]>;

    filter<T> (array: T[], filterCallback: (item: T) => boolean, options: SeparatorOption): Promise<T[]>;

    sort<T> (array: T[], sortParam: [ keyof T, 'asc' | 'desc' ], options: SeparatorOption): Promise<T[]>;
}