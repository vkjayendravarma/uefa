import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPublishComponent } from './survey-publish.component';

describe('SurveyPublishComponent', () => {
  let component: SurveyPublishComponent;
  let fixture: ComponentFixture<SurveyPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
