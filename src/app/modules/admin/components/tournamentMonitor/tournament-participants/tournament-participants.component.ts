import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNewTeamToTournamentComponent } from './add-new-team-to-tournament/add-new-team-to-tournament.component';

@Component({
  selector: 'app-tournament-participants',
  templateUrl: './tournament-participants.component.html',
  styleUrls: ['./tournament-participants.component.scss']
})
export class TournamentParticipantsComponent implements OnInit {
  USERS_DATA = [
    {id: 1, team: 'St. Xavier', division: 'U-5 Mixed', dateAdded: '11 July 2020', addedBy: 'Alan Rickman (Coach)', statusAction: 'Pending'},
    {id: 2, team: 'St. Xavier', division: 'U-5 Mixed', dateAdded: '11 July 2020', addedBy: 'Alan Rickman (Coach)', statusAction: 'Pending'},
    {id: 3, team: 'St. Xavier', division: 'U-5 Mixed', dateAdded: '11 July 2020', addedBy: 'Alan Rickman (Coach)', statusAction: 'Pending'},
    {id: 4, team: 'St. Xavier', division: 'U-5 Mixed', dateAdded: '11 July 2020', addedBy: 'Alan Rickman (Coach)', statusAction: 'Pending'},
    {id: 5, team: 'St. Xavier', division: 'U-5 Mixed', dateAdded: '11 July 2020', addedBy: 'Alan Rickman (Coach)', statusAction: 'Pending'},  
  ];
  constructor( private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  
  addNewTeam() {
   
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(AddNewTeamToTournamentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

}
