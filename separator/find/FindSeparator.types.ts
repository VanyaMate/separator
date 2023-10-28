import { SeparatorOptions } from '../Separator.types';


export type FindSeparatorOptions = {
    limit?: number;
} & FindOneSeparatorOptions;

export type FindOneSeparatorOptions = {
    skip?: number;
} & SeparatorOptions;

/**
 * Тип определяющий тип фильтра.
 * 1. Функция
 * 2. Объект содержащий какие-то поля из объекта
 */
export type FindSeparatorFilter<ItemType> =
    FindSeparatorFilterFunction<ItemType> | FindSeparatorFilterObject<ItemType>;
export type FindSeparatorFilterFunction<ItemType> = (item: ItemType) => boolean;
export type FindSeparatorFilterObject<ItemType> = Partial<ItemType>;

export type FindMostItemFilter<ItemType> =
    ((prev: ItemType, current: ItemType) => ItemType) | keyof ItemType;

export type FindStepOneResponse<ItemType> = AsyncGenerator<FindStepOneItem<ItemType>>

export type FindStepOneItem<ItemType> = {
    finish: boolean;
    item: ItemType | null;
    index: number;
};