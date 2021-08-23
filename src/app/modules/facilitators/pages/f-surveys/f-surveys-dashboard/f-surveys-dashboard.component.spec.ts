import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSurveysDashboardComponent } from './f-surveys-dashboard.component';

describe('FSurveysDashboardComponent', () => {
  let component: FSurveysDashboardComponent;
  let fixture: ComponentFixture<FSurveysDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSurveysDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSurveysDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
