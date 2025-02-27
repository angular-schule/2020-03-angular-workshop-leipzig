import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/book-store.service';



@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      concatMap(() => this.bs.getAll().pipe(
          map(books => BookActions.loadBooksSuccess({ books })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  loadBooksSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooksSuccess),
      tap(e => console.log('SUCCESS!!!'))
    )
  }, { dispatch: false });



  constructor(private actions$: Actions, private bs: BookStoreService) {}

}
