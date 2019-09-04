import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCurrentCount, selectDecrementDisabled, selectCountBy } from '../../reducers';

@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent implements OnInit {
  message = 'Coming Soon!';
  current$: Observable<number>;
  by$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountBy);
  }
}
