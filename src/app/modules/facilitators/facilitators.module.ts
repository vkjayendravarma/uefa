import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FHomeComponent } from './pages/f-home/f-home.component';
import { FacilitatorsRouterModule } from './facilitators-routing.module';
import { HeaderModule } from '../uikit/header/header.module';
import { MatIconModule } from '@angular/material/icon';
import { DrillsSessionsModule } from '../uikit/drills-sessions/drills-sessions.module';
import { ViewPostsModule } from '../uikit/posts/view-posts/view-posts.module';
import { EventsUiKitModule } from '../uikit/events/events-ui-kit/events-ui-kit.module';
import { FEventsComponent } from './pages/f-events/f-events.component';
import { FEventsPreviewComponent } from './pages/f-events/f-events-preview/f-events-preview.component';
import { FEventsDashboardComponent } from './pages/f-events/f-events-dashboard/f-events-dashboard.component';
import { FEventsIndividualComponent } from './pages/f-events/f-events-individual/f-events-individual.component';
import { EventEditModule } from '../uikit/events/event-edit/event-edit.module';
import { EventPreviewModule } from '../uikit/events/event-preview/event-preview.module';
import { ActivitiesModule } from '../uikit/global/activities/activities.module';
import { FPostsComponent } from './pages/f-posts/f-posts.component';
import { FPostsDashboardComponent } from './pages/f-posts/f-posts-dashboard/f-posts-dashboard.component';
import { FTournamentsComponent } from './pages/f-tournaments/f-tournaments.component';
import { FTournamentsDashboardComponent } from './pages/f-tournaments/f-tournaments-dashboard/f-tournaments-dashboard.component';
import { ViewTournamentsModule } from '../uikit/tournaments/view-tournaments/view-tournaments.module';
import { FTournamentsRegisterComponent } from './pages/f-tournaments/f-tournaments-register/f-tournaments-register.component';
import { FSurveysComponent } from './pages/f-surveys/f-surveys.component';
import { FSurveysDashboardComponent } from './pages/f-surveys/f-surveys-dashboard/f-surveys-dashboard.component';
import { ViewSurveysModule } from '../uikit/surveys/view-surveys/view-surveys.module';
import { FTeamsComponent } from './pages/f-teams/f-teams.component';
import { FTeamsDashboardComponent } from './pages/f-teams/f-teams-dashboard/f-teams-dashboard.component';
import { FTeamViewComponent } from './pages/f-teams/f-team-view/f-team-view.component';
import { TeamsModule } from '../uikit/teams/teams.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FTeamManagementHomeComponent } from './components/team-management/f-team-management-home/f-team-management-home.component';
import { FTeamManagementMembersComponent } from './components/team-management/f-team-management-members/f-team-management-members.component';
import { MatButtonModule } from '@angular/material/button';
import { FTeamManagementSessionsComponent } from './components/team-management/f-team-management-sessions/f-team-management-sessions.component';
import { FTeamManagementDocumentsComponent } from './components/team-management/f-team-management-documents/f-team-management-documents.component';
import { FTeamManagementAttendanceComponent } from './components/team-management/f-team-management-attendance/f-team-management-attendance.component';
import { FTeamManagementSquadsComponent } from './components/team-management/f-team-management-squads/f-team-management-squads.component';
import { FTeamManagementAnnouncementsComponent } from './components/team-management/f-team-management-announcements/f-team-management-announcements.component';
import { FCreateNewPostComponent } from './pages/f-posts/f-create-new-post/f-create-new-post.component';
import { CreateNewPostsModule } from '../uikit/posts/create-new-posts/create-new-posts.module';
import { FTournamentsPreviewComponent } from './pages/f-tournaments/f-tournaments-preview/f-tournaments-preview.component';
import { AddNewTeamToRegesterTournamentComponent } from './models/add-new-team-to-regester-tournament/add-new-team-to-regester-tournament.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { FTournamentsMonitorComponent } from './pages/f-tournaments/f-tournaments-monitor/f-tournaments-monitor.component';
import { TournamentsElevatedModule } from '../uikit/tournaments/tournaments-elevated/tournaments-elevated.module';
import { FCreateNewSurveyComponent } from './pages/f-surveys/f-create-new-survey/f-create-new-survey.component';
import { CreateNewSurveyModule } from '../uikit/surveys/create-new-survey/create-new-survey.module';
import { FPeopleComponent } from './pages/f-people/f-people.component';
import { FPeopleDashboardComponent } from './pages/f-people/f-people-dashboard/f-people-dashboard.component';
import { FPeoplePlayersComponent } from './components/people/f-people-players/f-people-players.component';
import { FPeopleFacilitatorsComponent } from './components/people/f-people-facilitators/f-people-facilitators.component';
import { FPeopleInviteesComponent } from './components/people/f-people-invitees/f-people-invitees.component';
import { FPeopleRequestsComponent } from './components/people/f-people-requests/f-people-requests.component';
import { TagChipsModule } from '../uikit/global/tag-chips/tag-chips.module';
import { FAnsSurveysComponent } from './pages/f-surveys/f-ans-surveys/f-ans-surveys.component';
import { FSurveyDoneComponent } from './pages/f-surveys/f-survey-done/f-survey-done.component';

@NgModule({
  declarations: [
    FHomeComponent,
    FEventsComponent,
    FEventsPreviewComponent,
    FEventsDashboardComponent,
    FEventsIndividualComponent,
    FPostsComponent,
    FPeopleComponent,
    FPeopleDashboardComponent,
    FPostsDashboardComponent,
    FTournamentsComponent,
    FTournamentsDashboardComponent,
    FTournamentsRegisterComponent,
    FSurveysComponent,
    FSurveysDashboardComponent,
    FTeamsComponent,
    FTeamsDashboardComponent,
    FTeamViewComponent,
    FTeamManagementHomeComponent,
    FTeamManagementMembersComponent,
    FTeamManagementSessionsComponent,
    FTeamManagementDocumentsComponent,
    FTeamManagementAttendanceComponent,
    FTeamManagementSquadsComponent,
    FTeamManagementAnnouncementsComponent,
    FCreateNewPostComponent,
    FTournamentsPreviewComponent,
    AddNewTeamToRegesterTournamentComponent,
    FTournamentsMonitorComponent,
    FCreateNewSurveyComponent,
    FPeoplePlayersComponent,
    FPeopleFacilitatorsComponent,
    FPeopleInviteesComponent,
    FPeopleRequestsComponent,
    FAnsSurveysComponent,
    FSurveyDoneComponent,
  ],
  imports: [
    CommonModule,
    FacilitatorsRouterModule,
    ReactiveFormsModule,
    FormsModule,

    // ui kit module
    HeaderModule,
    DrillsSessionsModule,
    ViewPostsModule,
    EventsUiKitModule,
    EventEditModule,
    EventPreviewModule,
    ActivitiesModule,
    ViewTournamentsModule,
    ViewSurveysModule,
    TeamsModule,
    CreateNewPostsModule,
    TournamentsElevatedModule,
    CreateNewSurveyModule,

    // mat
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,

    //tag chips
    TagChipsModule,
  ],
  entryComponents: [AddNewTeamToRegesterTournamentComponent],
})
export class FacilitatorsModule {}
