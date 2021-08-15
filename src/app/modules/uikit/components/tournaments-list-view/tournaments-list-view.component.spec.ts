import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsListViewComponent } from './tournaments-list-view.component';

describe('TournamentsListViewComponent', () => {
  let component: TournamentsListViewComponent;
  let fixture: ComponentFixture<TournamentsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
