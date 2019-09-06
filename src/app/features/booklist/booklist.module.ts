import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';



@NgModule({
  declarations: [BooklistComponent, ListViewComponent, DataEntryComponent],
  imports: [
    CommonModule
  ]
})
export class BooklistModule { }
