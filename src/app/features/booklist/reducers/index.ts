import * as fromList from './list-view.reducer';
import * as models from '../models';

export const featureName = 'booklistFeature';
export interface BookListState{
    list: fromList.ListViewState;
}
