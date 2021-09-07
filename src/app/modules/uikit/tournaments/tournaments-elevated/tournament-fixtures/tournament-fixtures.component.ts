import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateNewFixturesComponent } from './generate-new-fixtures/generate-new-fixtures.component';

@Component({
  selector: 'uikit-tournament-fixtures',
  templateUrl: './tournament-fixtures.component.html',
  styleUrls: ['./tournament-fixtures.component.scss']
})
export class TournamentFixturesComponent implements OnInit {

  @Input()
  user: string | undefined;

  fixturesViewType: string = 'listView';

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
    console.log(this.user);
    
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
