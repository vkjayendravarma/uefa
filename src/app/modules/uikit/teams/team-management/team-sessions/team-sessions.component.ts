import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTeamSessionComponent } from '../models/create-team-session/create-team-session.component';

@Component({
  selector: 'uikit-team-sessions',
  templateUrl: './team-sessions.component.html',
  styleUrls: ['./team-sessions.component.scss'],
})
export class TeamSessionsComponent implements OnInit {
  @Input()
  role: string | undefined;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  initiateDialogOpen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(
      CreateTeamSessionComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
