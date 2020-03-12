import { Component } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    function producer(o) {
      o.next(1);
      o.next(2);

      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.complete(), 3000);
    }

    const myObservable$ = new Observable(producer);


    const obs = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('Chemnitz')
    };

    // producer(obs);


    // const myObs$ = interval(500);
    // myObs$.subscribe(obs);

  }

}
