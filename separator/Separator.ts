import { ISeparator } from './Separator.interface';
import DeleteSeparator from './delete/DeleteSeparator';
import { IDeleteSeparator } from './delete/DeleteSeparator.interface';
import FindSeparator from './find/FindSeparator';
import { IFindSeparator } from './find/FindSeparator.interface';
import SortSeparator from './sort/SortSeparator';
import { ISortSeparator } from './sort/SortSeparator.interface';
import UpdateSeparator from './update/UpdateSeparator';
import { IUpdateSeparator } from './update/UpdateSeparator.interface';


export default class Separator implements ISeparator {
    public delete: IDeleteSeparator = new DeleteSeparator();
    public find: IFindSeparator     = new FindSeparator();
    public sort: ISortSeparator     = new SortSeparator();
    public update: IUpdateSeparator = new UpdateSeparator();
}