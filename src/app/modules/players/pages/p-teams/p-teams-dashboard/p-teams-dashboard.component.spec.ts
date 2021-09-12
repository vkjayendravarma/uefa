import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamsDashboardComponent } from './p-teams-dashboard.component';

describe('PTeamsDashboardComponent', () => {
  let component: PTeamsDashboardComponent;
  let fixture: ComponentFixture<PTeamsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
