import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      title: '',
      isbn: '',
      description: '',
      rating: 3
    };

    // detectChanges erst nach Initialisierung ausführen!
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for rateUp', () => {

    let emittedBook;

    // Subscribe auf EventEmitter
    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    // Methode aufrufen
    component.onRateUp();

    // Prüfen, ob Event kam
    expect(emittedBook).toBe(component.book);
    expect(emittedBook).toBeTruthy();
  });
});
