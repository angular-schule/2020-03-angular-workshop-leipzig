import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    /*if (book.rating < 5) {
      return {
        ...book,
        rating: book.rating + 1
      };
    } else {
      return book;
    }*/

    return {
      ...book,
      rating: book.rating < 5 ? book.rating + 1 : 5
    };

  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(1, book.rating - 1)
    };
  }
}
