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
    ((item: ItemType) => boolean) | Partial<ItemType>;

export type FindMostItemFilter<ItemType> =
    ((prev: ItemType, current: ItemType) => ItemType) | keyof ItemType;