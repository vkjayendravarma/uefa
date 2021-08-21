import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsElementComponent } from './tournaments-element.component';

describe('TournamentsElementComponent', () => {
  let component: TournamentsElementComponent;
  let fixture: ComponentFixture<TournamentsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
