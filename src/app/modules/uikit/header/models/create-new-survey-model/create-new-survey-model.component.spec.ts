import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSurveyModelComponent } from './create-new-survey-model.component';

describe('CreateNewSurveyModelComponent', () => {
  let component: CreateNewSurveyModelComponent;
  let fixture: ComponentFixture<CreateNewSurveyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSurveyModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSurveyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
