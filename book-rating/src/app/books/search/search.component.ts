import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  result$: Observable<Book[]>;

  searchControl: FormControl;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.result$ = this.searchControl.valueChanges.pipe(
      filter((term: string) => term.length >= 3),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    );

    // Suchbegriff muss mindestens 3 Zeichen lang sein
    // Suchbegriff erst abschicken, wenn Nutzer Finger still hält
    // Suchbegriff zum Server schicken (bs.search(term))
    // AsyncPipe
    // Ergebnisse anzeigen (ganz simpel!!)
    // Zusatz: Ladeanzeige
  }

}
