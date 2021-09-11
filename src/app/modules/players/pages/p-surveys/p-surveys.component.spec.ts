import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSurveysComponent } from './p-surveys.component';

describe('PSurveysComponent', () => {
  let component: PSurveysComponent;
  let fixture: ComponentFixture<PSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
