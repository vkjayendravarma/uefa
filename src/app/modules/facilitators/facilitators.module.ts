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



@NgModule({
  declarations: [
    FHomeComponent,
    FEventsComponent,
    FEventsPreviewComponent,
    FEventsDashboardComponent,
    FEventsIndividualComponent,
    FPostsComponent,
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
  ],
  imports: [
    CommonModule,
    FacilitatorsRouterModule,
    
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

    // mat
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
  ]
})
export class FacilitatorsModule { }
