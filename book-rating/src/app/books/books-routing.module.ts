import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FooComponent } from './foo/foo.component';
import { BazComponent } from './baz/baz.component';
import { BarComponent } from './bar/bar.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { SearchComponent } from './search/search.component';
import { CounterComponent } from './counter/counter.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'search', component: SearchComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    children: [
      { path: 'foo', component: FooComponent },
      { path: 'bar', component: BarComponent },
      { path: 'baz', component: BazComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
