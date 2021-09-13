import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAnsSurveysComponent } from './f-ans-surveys.component';

describe('FAnsSurveysComponent', () => {
  let component: FAnsSurveysComponent;
  let fixture: ComponentFixture<FAnsSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAnsSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAnsSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
