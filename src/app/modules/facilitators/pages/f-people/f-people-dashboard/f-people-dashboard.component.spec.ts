import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPeopleDashboardComponent } from './f-people-dashboard.component';

describe('FPeopleDashboardComponent', () => {
  let component: FPeopleDashboardComponent;
  let fixture: ComponentFixture<FPeopleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FPeopleDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPeopleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
