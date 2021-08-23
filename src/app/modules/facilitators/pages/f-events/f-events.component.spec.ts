import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEventsComponent } from './f-events.component';

describe('FEventsComponent', () => {
  let component: FEventsComponent;
  let fixture: ComponentFixture<FEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
