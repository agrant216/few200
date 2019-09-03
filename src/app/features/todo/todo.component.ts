import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  currentId = 1;
  todoList: TodoListItem[] = [
    { id: '1', description: 'Buy coffee', completed: false }
  ];
  constructor() { }

  ngOnInit() {
  }

  addTodoItem(item: string) {
    console.log(item);
    this.todoList = [{
      id: (this.currentId++).toString(),
      description: item,
      completed: false
    }, ...this.todoList];
  }
}
