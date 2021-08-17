import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalActivitiesComponent } from './global-activities.component';

describe('GlobalActivitiesComponent', () => {
  let component: GlobalActivitiesComponent;
  let fixture: ComponentFixture<GlobalActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
