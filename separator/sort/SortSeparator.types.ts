import { SeparatorOptions, SeparatorSortMode } from '../Separator.types';


export type SortSeparatorOptions = {
    limit?: number;
} & SeparatorOptions;

export type SortSeparatorFilter<ItemType> = ((prev: ItemType, current: ItemType) => (-1 | 1)) | {
    key: keyof ItemType;
    type: SeparatorSortMode;
}