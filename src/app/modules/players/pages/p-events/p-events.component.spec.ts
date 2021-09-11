import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEventsComponent } from './p-events.component';

describe('PEventsComponent', () => {
  let component: PEventsComponent;
  let fixture: ComponentFixture<PEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
