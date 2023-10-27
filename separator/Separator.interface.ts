import { IDeleteSeparator } from './delete/DeleteSeparator.interface';
import { IFindSeparator } from './find/FindSeparator.interface';
import { ISortSeparator } from './sort/SortSeparator.interface';
import { IUpdateSeparator } from './update/UpdateSeparator.interface';


export interface ISeparator {
    sort: ISortSeparator;
    find: IFindSeparator;
    update: IUpdateSeparator;
    delete: IDeleteSeparator;
}