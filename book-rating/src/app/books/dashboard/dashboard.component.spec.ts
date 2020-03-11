import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock;

  beforeEach(() => {
    book = {
      title: '',
      isbn: '',
      description: '',
      rating: 3
    };

    ratingMock = {
      rateUp: () => book
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // Wenn BookRatingService angefordert wird,
        // wird stattdessen ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp', () => {
    // Arrange
    const rs = TestBed.inject(BookRatingService);

    // spioniere auf rs.rateUp() aus
    // leite originalen Call durch, damit wirklich unser
    // eigener RatingMock ausgeführt wird.
    // immer noch Arrange!
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.rateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });
});

