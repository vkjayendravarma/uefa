import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNewTeamToRegesterTournamentComponent } from '../../../models/add-new-team-to-regester-tournament/add-new-team-to-regester-tournament.component';

@Component({
  selector: 'app-f-tournaments-register',
  templateUrl: './f-tournaments-register.component.html',
  styleUrls: ['./f-tournaments-register.component.scss']
})
export class FTournamentsRegisterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewTeam() {
   
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(AddNewTeamToRegesterTournamentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

}
