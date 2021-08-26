import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANewSurveyComponent } from './a-new-survey.component';

describe('ANewSurveyComponent', () => {
  let component: ANewSurveyComponent;
  let fixture: ComponentFixture<ANewSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANewSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ANewSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
