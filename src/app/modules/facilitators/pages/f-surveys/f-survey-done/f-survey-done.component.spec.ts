import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSurveyDoneComponent } from './f-survey-done.component';

describe('FSurveyDoneComponent', () => {
  let component: FSurveyDoneComponent;
  let fixture: ComponentFixture<FSurveyDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSurveyDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSurveyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
