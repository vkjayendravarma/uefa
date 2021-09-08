import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCreateNewSurveyComponent } from './f-create-new-survey.component';

describe('FCreateNewSurveyComponent', () => {
  let component: FCreateNewSurveyComponent;
  let fixture: ComponentFixture<FCreateNewSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCreateNewSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FCreateNewSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
