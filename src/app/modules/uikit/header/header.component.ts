import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SidebarServiceService } from 'src/app/globalServices/sidebar-service.service';
import { CreateNewEventModelComponent } from 'src/app/modules/uikit/header/models/create-new-event-model/create-new-event-model.component';
import { InviteUserModelComponent } from './models/invite-user-model/invite-user-model.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  quickActionType: string | undefined;

  @Input()
  quickActionButtonText: string | undefined;

  @Input()
  headerTitle: string | undefined;

  @Input()
  subtitleTitle: string | undefined;

  @Input()
  backgroundImage: string | undefined;

  language: any;
  sidebarIsActive: boolean = true;
  backgroundImageURL: string =
    'url(../../../../assets/images/backgrounds/dashboard/';
  quickActionComponent: any;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private sidebarService: SidebarServiceService
  ) {
    if (this.quickActionType == 'createNewEvent') {
      this.quickActionComponent = CreateNewEventModelComponent;
    }
  }

  ngOnInit(): void {
    if (this.backgroundImage == undefined || this.headerTitle == undefined) {
      throw new Error(
        "Attribute 'backgroundImage' and 'headerTitle' are required"
      );
    } else {
      this.backgroundImageURL =
        this.backgroundImageURL + this.backgroundImage + '.jpg)';
      console.log(this.backgroundImageURL);

      this.quickActionsConfig();
    }
  }

  quickActionsConfig() {
    let supportedQuickActions = ['createNewEvent', 'inviteNewUsers'];
    if (
      this.quickActionType !== undefined &&
      this.quickActionType in supportedQuickActions
    ) {
      throw new Error(
        'unsupported quick action: use ' + supportedQuickActions.join(', ')
      );
    }
    if (this.quickActionType == 'createNewEvent') {
      this.quickActionComponent = CreateNewEventModelComponent;
    }
    if (this.quickActionType == 'inviteNewUsers') {
      this.quickActionComponent = InviteUserModelComponent;
    }
  }

  toggleSideBar() {
    console.log('toggle');
    this.sidebarIsActive = !this.sidebarIsActive;
    this.sidebarService.toggleSideBar(this.sidebarIsActive);
  }

  initiateQuickAction() {
    if (this.quickActionType == undefined) {
      return;
    }
    console.log('initiate Quick Action ' + this.quickActionType);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';

    const dialogRef = this.dialog.open(this.quickActionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
