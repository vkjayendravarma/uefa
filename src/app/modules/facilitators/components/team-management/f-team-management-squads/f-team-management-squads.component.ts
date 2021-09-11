import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateSquadModelComponent } from 'src/app/modules/uikit/teams/team-management/models/create-squad-model/create-squad-model.component';

@Component({
  selector: 'app-f-team-management-squads',
  templateUrl: './f-team-management-squads.component.html',
  styleUrls: ['./f-team-management-squads.component.scss'],
})
export class FTeamManagementSquadsComponent implements OnInit {
  squadsData = [1, 2, 3];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  initiateDialogOpen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '100%';

    const dialogRef = this.dialog.open(CreateSquadModelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
