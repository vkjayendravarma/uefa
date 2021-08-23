import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamsDashboardComponent } from './f-teams-dashboard.component';

describe('FTeamsDashboardComponent', () => {
  let component: FTeamsDashboardComponent;
  let fixture: ComponentFixture<FTeamsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
