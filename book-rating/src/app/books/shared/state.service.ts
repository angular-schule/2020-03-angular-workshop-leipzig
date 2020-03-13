import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { Book } from './book';

interface MyState {
  counter: number;
  isLoading: boolean;
  books: Book[];
  favoriteNumbers: number[];
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private input$ = new Subject<string>();

  private initialState: MyState = {
    counter: 0,
    isLoading: false,
    books: [],
    favoriteNumbers: [1,2,7,42]
  };

  state$ = this.input$.pipe(
    startWith('INIT'),
    scan(this.reducer, this.initialState)
  );

  private reducer(state: MyState, msg: string): MyState {
    switch (msg) {
      case 'INC': return { ...state, counter: state.counter + 1};
      case 'DEC': return { ...state, counter: state.counter - 1};
      case 'RESET': return { ...state, counter: 0 };
      default: return state;
    }
  }

  dispatch(value: string) {
    this.input$.next(value);
  }
}
