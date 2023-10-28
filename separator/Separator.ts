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

const separator: ISeparator = new Separator();

separator.find
    .first(
        [ 1, 2, 3, 10, 10, 32, 0, -1, 55 ],
        (item) => item > 10,
        { skip: 1, maxOperations: 1 },
        console.log,
    )
    .then((result) => console.log('Index: ', result[0], 'item: ', result[1]));