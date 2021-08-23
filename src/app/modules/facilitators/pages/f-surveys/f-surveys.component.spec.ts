import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSurveysComponent } from './f-surveys.component';

describe('FSurveysComponent', () => {
  let component: FSurveysComponent;
  let fixture: ComponentFixture<FSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
