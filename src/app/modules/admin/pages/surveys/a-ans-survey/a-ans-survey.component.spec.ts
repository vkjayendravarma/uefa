import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAnsSurveyComponent } from './a-ans-survey.component';

describe('AAnsSurveyComponent', () => {
  let component: AAnsSurveyComponent;
  let fixture: ComponentFixture<AAnsSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAnsSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAnsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
