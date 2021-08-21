import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewTournamentComponent } from './admin-new-tournament.component';

describe('AdminNewTournamentComponent', () => {
  let component: AdminNewTournamentComponent;
  let fixture: ComponentFixture<AdminNewTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
