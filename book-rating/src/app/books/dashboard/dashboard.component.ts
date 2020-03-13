import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { loadBooks } from '../store/book.actions';
import { getBooksLoading, getBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));

  books: Book[];

  constructor(private store: Store, private rs: BookRatingService, private bs: BookStoreService) {}

  ngOnInit(): void {
    this.store.dispatch(loadBooks());

    this.store.pipe(select(getBooks)).subscribe(books => {
      this.books = books;
    });
  }

  rateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b);
  }

}
