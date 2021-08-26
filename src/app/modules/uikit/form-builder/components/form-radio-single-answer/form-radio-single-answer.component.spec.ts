import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioSingleAnswerComponent } from './form-radio-single-answer.component';

describe('FormRadioSingleAnswerComponent', () => {
  let component: FormRadioSingleAnswerComponent;
  let fixture: ComponentFixture<FormRadioSingleAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRadioSingleAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioSingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
