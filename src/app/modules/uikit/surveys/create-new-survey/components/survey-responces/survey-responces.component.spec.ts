import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResponcesComponent } from './survey-responces.component';

describe('SurveyResponcesComponent', () => {
  let component: SurveyResponcesComponent;
  let fixture: ComponentFixture<SurveyResponcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyResponcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResponcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
