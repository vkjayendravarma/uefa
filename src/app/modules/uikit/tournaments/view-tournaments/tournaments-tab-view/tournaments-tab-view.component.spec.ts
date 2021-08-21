import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsTabViewComponent } from './tournaments-tab-view.component';

describe('TournamentsTabViewComponent', () => {
  let component: TournamentsTabViewComponent;
  let fixture: ComponentFixture<TournamentsTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsTabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
