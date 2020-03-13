import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { SearchComponent } from './search/search.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    FooComponent,
    BarComponent,
    BazComponent,
    SearchComponent,
    BookCreateComponent,
    BookFormComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
    // import { ReactiveFormsModule } from '@angular/forms';
  ]
})
export class BooksModule { }
