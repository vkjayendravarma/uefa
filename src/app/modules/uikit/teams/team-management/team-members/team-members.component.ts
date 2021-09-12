import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTeamMemberModelComponent } from '../models/add-team-member-model/add-team-member-model.component';

@Component({
  selector: 'uikit-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent implements OnInit {
  @Input()
  role: string | undefined;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addTeamMember() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '60%';

    const dialogRef = this.dialog.open(
      AddTeamMemberModelComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
