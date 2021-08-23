import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonitorTournamentComponent } from './admin-monitor-tournament.component';

describe('AdminMonitorTournamentComponent', () => {
  let component: AdminMonitorTournamentComponent;
  let fixture: ComponentFixture<AdminMonitorTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonitorTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMonitorTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
