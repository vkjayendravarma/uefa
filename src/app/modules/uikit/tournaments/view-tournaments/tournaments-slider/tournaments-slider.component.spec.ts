import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsSliderComponent } from './tournaments-slider.component';

describe('TournamentsSliderComponent', () => {
  let component: TournamentsSliderComponent;
  let fixture: ComponentFixture<TournamentsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
