import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// const selectCounter = state => state.counter;


@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$ = this.state.state$.pipe(map(state => state.counter));

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.state.state$.subscribe(console.log);
  }

  increment() {
    this.state.dispatch('INC');
  }

  decrement() {
    this.state.dispatch('DEC');
  }

  reset() {
    this.state.dispatch('RESET');
  }

}
