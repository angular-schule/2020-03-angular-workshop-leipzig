import { Component } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    function producer(o) {
      console.log('Hallo');
      const foo = 1 + 1;
      o.next(foo);
      setTimeout(() => {
        o.next('Welt');
      }, 2000);
    }


    const myObservable$ = new Observable(producer);


    const subscriber = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('Chemnitz')
    };

    // producer(subscriber);


    // const myObs$ = interval(500);
    // myObs$.subscribe(obs);

    interval(1000).pipe(
      map(e => e * 100),
      filter(e => e > 500)
    ).subscribe(e => console.log(e));

    // import { map } from 'rxjs/operators';

  }

}
