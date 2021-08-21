import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEventsDashboardComponent } from './f-events-dashboard.component';

describe('FEventsDashboardComponent', () => {
  let component: FEventsDashboardComponent;
  let fixture: ComponentFixture<FEventsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEventsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEventsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
