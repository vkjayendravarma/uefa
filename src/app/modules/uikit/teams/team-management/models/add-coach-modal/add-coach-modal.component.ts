import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTeamMemberModelComponent } from '../add-team-member-model/add-team-member-model.component';

@Component({
  selector: 'app-add-coach-modal',
  templateUrl: './add-coach-modal.component.html',
  styleUrls: ['./add-coach-modal.component.scss'],
})
export class AddCoachModalComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addCoach() {
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
