import { Component, OnInit } from '@angular/core';
import { AppState, selectCurrentCount, selectDecrementDisabled, selectCountBy } from '../../reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  by$: Observable<number>;
  decrementDisabled$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    this.by$ = this.store.select(selectCountBy);
  }

  increment() {
    this.store.dispatch(actions.increment());
  }
  decrement() {
    this.store.dispatch(actions.decrement());
  }
  reset() {
    this.store.dispatch(actions.reset());
  }
  countBySet(num: number) {
    this.store.dispatch(actions.setCountBy({ by: num }));
  }
}
