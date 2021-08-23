import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateNewFixturesComponent } from './generate-new-fixtures/generate-new-fixtures.component';

@Component({
  selector: 'app-tournament-fixtures',
  templateUrl: './tournament-fixtures.component.html',
  styleUrls: ['./tournament-fixtures.component.scss']
})
export class TournamentFixturesComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  addNewTeam() {
   
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(GenerateNewFixturesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

}
