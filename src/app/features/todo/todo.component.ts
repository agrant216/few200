import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './models';
import { ListDataService } from './services/list-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList$: Observable<TodoListItem[]>;

  constructor(private service: ListDataService) { }

  ngOnInit() {
    // meaningful work getting the component ready goes here
    // this.service.getData().subscribe(stuff => {
    //   console.log('Got this from the service', stuff);
    //   this.todoList = stuff;
    // });
    this.todoList$ = this.service.getData();
  }

  addTodoItem(item: string) {
    this.service.add(item);
  }
}
