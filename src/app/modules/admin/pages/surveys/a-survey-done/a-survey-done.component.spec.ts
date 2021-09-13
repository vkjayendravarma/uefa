import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASurveyDoneComponent } from './a-survey-done.component';

describe('ASurveyDoneComponent', () => {
  let component: ASurveyDoneComponent;
  let fixture: ComponentFixture<ASurveyDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASurveyDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASurveyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
