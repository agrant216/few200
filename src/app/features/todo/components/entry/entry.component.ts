import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  addItem(itemElement: HTMLInputElement) {
    this.itemAdded.emit(itemElement.value);
    itemElement.value = '';
    itemElement.focus();
  }
}
