import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTeamToRegesterTournamentComponent } from './add-new-team-to-regester-tournament.component';

describe('AddNewTeamToRegesterTournamentComponent', () => {
  let component: AddNewTeamToRegesterTournamentComponent;
  let fixture: ComponentFixture<AddNewTeamToRegesterTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTeamToRegesterTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTeamToRegesterTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
