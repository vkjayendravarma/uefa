import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsCompletedElementComponent } from './tournaments-completed-element.component';

describe('TournamentsCompletedElementComponent', () => {
  let component: TournamentsCompletedElementComponent;
  let fixture: ComponentFixture<TournamentsCompletedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsCompletedElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsCompletedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
