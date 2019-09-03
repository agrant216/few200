import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [TodoComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
