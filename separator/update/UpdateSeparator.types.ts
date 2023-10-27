import { FindSeparatorFilter } from '../find/FindSeparator.types';
import { SeparatorOptions } from '../Separator.types';


export type UpdateSeparatorOptions = {
    limit?: number;
} & UpdateOneSeparatorOptions;

export type UpdateOneSeparatorOptions = {} & SeparatorOptions;
export type UpdateSeparatorFilter<ItemType> = FindSeparatorFilter<ItemType>;
export type UpdateSeparatorMethod<ItemType> = (prev: ItemType) => ItemType;