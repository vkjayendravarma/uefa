import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSquadModelComponent } from 'src/app/modules/uikit/teams/team-management/models/create-squad-model/create-squad-model.component';

@Component({
  selector: 'app-p-team-management-squads',
  templateUrl: './p-team-management-squads.component.html',
  styleUrls: ['./p-team-management-squads.component.scss'],
})
export class PTeamManagementSquadsComponent implements OnInit {
  squadsData = [1, 2, 3];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  initiateDialogOpen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(CreateSquadModelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
