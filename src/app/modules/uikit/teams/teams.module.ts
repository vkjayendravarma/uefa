import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsGalaryViewComponent } from './teams-galary-view/teams-galary-view.component';
import { TeamsElementComponent } from './teams-element/teams-element.component';
import { MatIconModule } from '@angular/material/icon';
import { TeamsSingleViewComponent } from './teams-single-view/teams-single-view.component';
import { TeamAttendanceComponent } from './team-attendance/team-attendance.component';
import { TeamMembersComponent } from './team-management/team-members/team-members.component';
import { TeamSessionsComponent } from './team-management/team-sessions/team-sessions.component';
import { AddTeamMemberModelComponent } from './team-management/models/add-team-member-model/add-team-member-model.component';
import { TeamSessionManageMembersComponent } from './team-management/team-sessions/team-session-manage-members/team-session-manage-members.component';
import { CreateTeamSessionComponent } from './team-management/models/create-team-session/create-team-session.component';
import { TeamDocumentsComponent } from './team-management/team-documents/team-documents.component';
import { TeamSquadComponent } from './team-management/team-squad/team-squad.component';
import { TeamAnnouncementsComponent } from './team-management/team-announcements/team-announcements.component';
import { CreateSquadModelComponent } from './team-management/models/create-squad-model/create-squad-model.component';
import { TeamMembersElementComponent } from './team-management/team-members-element/team-members-element.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TeamMemberDetailsComponent } from './team-management/team-members-manage-view/team-member-details/team-member-details.component';
import { TeamMemberDetailsEditComponent } from './team-management/team-members-manage-view/team-member-details-edit/team-member-details-edit.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormUiElementsModule } from '../form-ui-elements/form-ui-elements.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddCoachModalComponent } from './team-management/models/add-coach-modal/add-coach-modal.component';
import { AddPlayerModalComponent } from './team-management/models/add-player-modal/add-player-modal.component';

@NgModule({
  declarations: [
    TeamsGalaryViewComponent,
    TeamsElementComponent,
    TeamsSingleViewComponent,
    TeamAttendanceComponent,
    TeamMembersComponent,
    TeamSessionsComponent,
    AddTeamMemberModelComponent,
    TeamSessionManageMembersComponent,
    CreateTeamSessionComponent,
    TeamDocumentsComponent,
    TeamSquadComponent,
    TeamAnnouncementsComponent,
    CreateSquadModelComponent,
    TeamMembersElementComponent,
    TeamMemberDetailsComponent,
    TeamMemberDetailsEditComponent,
    AddCoachModalComponent,
    AddPlayerModalComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormUiElementsModule,
    MatSlideToggleModule,
    MatInputModule,
  ],
  exports: [
    TeamsGalaryViewComponent,
    TeamAttendanceComponent,
    TeamsSingleViewComponent,
    TeamMembersComponent,
    TeamSessionsComponent,
    TeamSessionManageMembersComponent,
    TeamDocumentsComponent,
    TeamSquadComponent,
    TeamAnnouncementsComponent,
    TeamMemberDetailsComponent,
    TeamMembersElementComponent,
    TeamMemberDetailsEditComponent,
  ],

  entryComponents: [
    AddTeamMemberModelComponent,
    CreateTeamSessionComponent,
    CreateSquadModelComponent,
  ],
})
export class TeamsModule {}
