import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { InviteUserModelComponent } from 'src/app/modules/uikit/models/invite-user-model/invite-user-model.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  USERS_DATA = [
    {id: 1, user: 'abc', role: 'national admin', region: 'India', status: 'active', actions: ''},
    {id: 1, user: 'xyz', role: 'random', region: 'Europe', status: 'pending', actions: ''},
  ];


  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  initiateInvite(){
    console.log("initiate event");
    
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.backdropClass= "mat-dialog-custom-backdrop";

    const dialogRef = this.dialog.open(InviteUserModelComponent, dialogConfig);



    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);      
    })
  }
}
