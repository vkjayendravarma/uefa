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
import { TeamMembersManageViewComponent } from './team-management/team-members-manage-view/team-members-manage-view.component';
import { TeamSessionManageMembersComponent } from './team-management/team-sessions/team-session-manage-members/team-session-manage-members.component';
import { CreateTeamSessionComponent } from './team-management/models/create-team-session/create-team-session.component';
import { TeamDocumentsComponent } from './team-management/team-documents/team-documents.component';
import { TeamSquadComponent } from './team-management/team-squad/team-squad.component';
import { TeamAnnouncementsComponent } from './team-management/team-announcements/team-announcements.component';
import { CreateSquadModelComponent } from './team-management/models/create-squad-model/create-squad-model.component';
import { TeamMembersElementComponent } from './team-management/team-members-element/team-members-element.component';

@NgModule({
  declarations: [
    TeamsGalaryViewComponent,
    TeamsElementComponent,
    TeamsSingleViewComponent,
    TeamAttendanceComponent,
    TeamMembersComponent,
    TeamSessionsComponent,
    AddTeamMemberModelComponent,
    TeamMembersManageViewComponent,
    TeamSessionManageMembersComponent,
    CreateTeamSessionComponent,
    TeamDocumentsComponent,
    TeamSquadComponent,
    TeamAnnouncementsComponent,
    CreateSquadModelComponent,
    TeamMembersElementComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    TeamsGalaryViewComponent,
    TeamAttendanceComponent,
    TeamsSingleViewComponent,
    TeamMembersComponent,
    TeamSessionsComponent,
    TeamMembersManageViewComponent,
    TeamSessionManageMembersComponent,
    TeamDocumentsComponent,
    TeamSquadComponent,
    TeamAnnouncementsComponent,
  ],
})
export class TeamsModule {}
