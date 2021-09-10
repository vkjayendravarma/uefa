import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTeamMemberModelComponent } from 'src/app/modules/uikit/teams/team-management/models/add-team-member-model/add-team-member-model.component';

@Component({
  selector: 'app-f-team-management-members',
  templateUrl: './f-team-management-members.component.html',
  styleUrls: ['./f-team-management-members.component.scss'],
})
export class FTeamManagementMembersComponent implements OnInit {
  membersData = [1, 2, 3];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  initiateDialogOpen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(
      AddTeamMemberModelComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
