import { FindSeparatorFilter } from '../find/FindSeparator.types';
import { SeparatorOptions } from '../Separator.types';


export type DeleteSeparatorOptions = {
    limit?: number;
    side?: 'start' | 'end';
} & DeleteOneSeparatorOptions;

export type DeleteOneSeparatorOptions = SeparatorOptions;

export type DeleteSeparatorFilter<ItemType> = FindSeparatorFilter<ItemType>;