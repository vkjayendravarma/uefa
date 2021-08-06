import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CreateNewEventModelComponent } from 'src/app/modules/uikit/models/create-new-event-model/create-new-event-model.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  initiateNewEvent(){
    console.log("initiate event");
    
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.backdropClass= "mat-dialog-custom-backdrop";

    const dialogRef = this.dialog.open(CreateNewEventModelComponent, dialogConfig);



    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);      
    })
  }

}
