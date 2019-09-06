import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface ListViewEntity{
    id: string;
    title:string;
    author:string;
    type:string;
}

export interface ListViewState extends EntityState<ListViewEntity>{

}

export const adapter = createEntityAdapter<ListViewEntity>();