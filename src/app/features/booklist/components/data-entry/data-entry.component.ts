import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  options:string[] = ['Hardcover','Paperback','E-book']
  constructor() { }

  ngOnInit() {
  }

}
