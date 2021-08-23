import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTeamToTournamentComponent } from './add-new-team-to-tournament.component';

describe('AddNewTeamToTournamentComponent', () => {
  let component: AddNewTeamToTournamentComponent;
  let fixture: ComponentFixture<AddNewTeamToTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTeamToTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTeamToTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
