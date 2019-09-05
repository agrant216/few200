import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface ListEntity {
  id: string;
  title: string;
}

export interface ListState extends EntityState<ListEntity> {

}

export const adapter = createEntityAdapter<ListEntity>();

// const initialState = adapter.getInitialState();
const initialState: ListState = adapter.getInitialState();
const reducerFunction = createReducer(
  initialState,
  on(actions.showAdded, (s, a) => adapter.addOne(a.entity, s)),
  on(actions.showsLoaded, (s, a) => adapter.addAll(a.shows, s)),
  on(actions.showAddedSuccess, (s, a) => {
    const tempState = adapter.removeOne(a.oldid, s);
    return adapter.addOne(a.newEntity, tempState);
  })
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



