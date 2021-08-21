import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTournamentsDashboardComponent } from './admin-tournaments-dashboard.component';

describe('AdminTournamentsDashboardComponent', () => {
  let component: AdminTournamentsDashboardComponent;
  let fixture: ComponentFixture<AdminTournamentsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTournamentsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTournamentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
