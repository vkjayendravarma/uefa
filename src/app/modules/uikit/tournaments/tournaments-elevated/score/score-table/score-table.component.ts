import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PointsTableModelComponent } from '../points-table-model/points-table-model.component';
import { ScoreMatchModelComponent } from '../score-match-model/score-match-model.component';

@Component({
  selector: 'uikit-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss']
})
export class ScoreTableComponent implements OnInit {

  @Input() user: string | undefined;

  matches = [1, 2, 3, 4, 5, 6]

  constructor( private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  actionControl(actionType: string): void {
    let dialogComponent;
    if(actionType === 'scoreMatch'){
      dialogComponent = ScoreMatchModelComponent
    } else if(actionType === 'displayPointsTable'){
      dialogComponent = PointsTableModelComponent
    } else{
      throw new Error(
        'unsupported action '
      );
      return;
    }

    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    
    

    const dialogRef = this._dialog.open(dialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

}
