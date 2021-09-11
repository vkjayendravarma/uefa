import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SidebarServiceService } from 'src/app/globalServices/sidebar-service.service';
import { CreateNewEventModelComponent } from 'src/app/modules/uikit/header/models/create-new-event-model/create-new-event-model.component';
import { CreateNewSurveyModelComponent } from './models/create-new-survey-model/create-new-survey-model.component';
import { CreateNewTeamComponent } from './models/create-new-team/create-new-team.component';
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
  linkAction: string | undefined;

  @Input()
  linkActionButtonText: string | undefined;

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
    private sidebarService: SidebarServiceService,
    private router: Router
  ) {}

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
    let supportedQuickActions = [
      'createNewEvent',
      'inviteNewUsers',
      'createNewSurvey',
      'createNewTeam',
    ];
    if (
      this.quickActionType !== undefined &&
      this.quickActionType in supportedQuickActions
    ) {
      throw new Error(
        'unsupported quick action: use ' + supportedQuickActions.join(', ')
      );
      return;
    }
    if (this.quickActionType == 'createNewEvent') {
      this.quickActionComponent = CreateNewEventModelComponent;
      return;
    }
    if (this.quickActionType == 'inviteNewUsers') {
      this.quickActionComponent = InviteUserModelComponent;
      return;
    }
    if (this.quickActionType == 'createNewSurvey') {
      this.quickActionComponent = CreateNewSurveyModelComponent;
      return;
    }
    if (this.quickActionType == 'createNewTeam') {
      this.quickActionComponent = CreateNewTeamComponent;
      return;
    }
  }

  toggleSideBar() {
    console.log('toggle');
    this.sidebarIsActive = !this.sidebarIsActive;
    this.sidebarService.toggleSideBar(this.sidebarIsActive);
    if (window.screen.width === 630) {
      // 768px portrait
      this.sidebarIsActive = false;
    }
  }

  initiateQuickAction() {
    if (this.quickActionType == undefined) {
      return;
    }
    console.log('initiate Quick Action ' + this.quickActionType);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.backdropClass = 'mat-dialog-custom-backdrop';
    dialogConfig.minWidth = '40%';

    const dialogRef = this.dialog.open(this.quickActionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

  navigate() {
    if (this.linkAction) this.router.navigateByUrl(this.linkAction);
  }
}
