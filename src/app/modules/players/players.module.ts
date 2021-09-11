import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { CalendarsModule } from '../uikit/calendars/calendars.module';
import { PlayerRouterModule } from './players-routing.module';
import { HeaderModule } from '../uikit/header/header.module';
import { DrillsSessionsModule } from '../uikit/drills-sessions/drills-sessions.module';
import { EventsUiKitModule } from '../uikit/events/events-ui-kit/events-ui-kit.module';
import { TeamsModule } from '../uikit/teams/teams.module';
import { ViewPostsModule } from '../uikit/posts/view-posts/view-posts.module';
import { PEventsComponent } from './pages/p-events/p-events.component';
import { PPostsComponent } from './pages/p-posts/p-posts.component';
import { PSurveysComponent } from './pages/p-surveys/p-surveys.component';
import { PTournamentsComponent } from './pages/p-tournaments/p-tournaments.component';
import { PTeamManagementHomeComponent } from './components/team-management/p-team-management-home/p-team-management-home.component';
import { PTeamManagementSessionsComponent } from './components/team-management/p-team-management-sessions/p-team-management-sessions.component';
import { PTeamManagementAttendanceComponent } from './components/team-management/p-team-management-attendance/p-team-management-attendance.component';
import { PTeamManagementDocumentsComponent } from './components/team-management/p-team-management-documents/p-team-management-documents.component';
import { PTeamManagementSquadsComponent } from './components/team-management/p-team-management-squads/p-team-management-squads.component';
import { PTeamManagementAnnouncementsComponent } from './components/team-management/p-team-management-announcements/p-team-management-announcements.component';
import { PTeamsComponent } from './pages/p-teams/p-teams.component';
import { PTeamViewComponent } from './pages/p-teams/p-team-view/p-team-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EventEditModule } from '../uikit/events/event-edit/event-edit.module';
import { EventPreviewModule } from '../uikit/events/event-preview/event-preview.module';
import { ActivitiesModule } from '../uikit/global/activities/activities.module';
import { ViewTournamentsModule } from '../uikit/tournaments/view-tournaments/view-tournaments.module';
import { ViewSurveysModule } from '../uikit/surveys/view-surveys/view-surveys.module';
import { CreateNewPostsModule } from '../uikit/posts/create-new-posts/create-new-posts.module';
import { TournamentsElevatedModule } from '../uikit/tournaments/tournaments-elevated/tournaments-elevated.module';
import { CreateNewSurveyModule } from '../uikit/surveys/create-new-survey/create-new-survey.module';

@NgModule({
  declarations: [
    PDashboardComponent,
    PEventsComponent,
    PPostsComponent,
    PSurveysComponent,
    PTournamentsComponent,
    PTeamManagementHomeComponent,
    PTeamManagementSessionsComponent,
    PTeamManagementAttendanceComponent,
    PTeamManagementDocumentsComponent,
    PTeamManagementSquadsComponent,
    PTeamManagementAnnouncementsComponent,
    PTeamsComponent,
    PTeamViewComponent,
  ],
  imports: [
    CommonModule,
    PlayerRouterModule,
    CalendarsModule,
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

    //mat
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PlayersModule {}
