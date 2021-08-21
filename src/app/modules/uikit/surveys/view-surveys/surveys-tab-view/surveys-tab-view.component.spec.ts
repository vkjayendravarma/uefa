import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysTabViewComponent } from './surveys-tab-view.component';

describe('SurveysTabViewComponent', () => {
  let component: SurveysTabViewComponent;
  let fixture: ComponentFixture<SurveysTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysTabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
