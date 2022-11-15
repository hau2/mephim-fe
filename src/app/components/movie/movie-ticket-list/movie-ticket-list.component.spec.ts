import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketListComponent } from './movie-ticket-list.component';

describe('MovieTicketListComponent', () => {
  let component: MovieTicketListComponent;
  let fixture: ComponentFixture<MovieTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
