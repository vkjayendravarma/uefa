import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardElementComponent } from './event-card-element.component';

describe('EventCardElementComponent', () => {
  let component: EventCardElementComponent;
  let fixture: ComponentFixture<EventCardElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCardElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
