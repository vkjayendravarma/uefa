import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillsSessionsComponent } from './drills-sessions.component';

describe('DrillsSessionsComponent', () => {
  let component: DrillsSessionsComponent;
  let fixture: ComponentFixture<DrillsSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillsSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillsSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
