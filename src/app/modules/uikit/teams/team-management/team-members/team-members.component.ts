import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCoachModalComponent } from '../models/add-coach-modal/add-coach-modal.component';
import { AddPlayerModalComponent } from '../models/add-player-modal/add-player-modal.component';

@Component({
  selector: 'uikit-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent implements OnInit {
  @Input()
  role: string | undefined;

  players = [1, 2, 3, 4, 5];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addTeamMember() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '60%';

    const dialogRef = this.dialog.open(AddPlayerModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

  addCoach() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '60%';

    const dialogRef = this.dialog.open(AddCoachModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
