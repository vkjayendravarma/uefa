import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminRouterModule } from './admin-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { HeaderModule } from '../uikit/header/header.module';
import { EventsDashboardComponent } from './pages/events/events-dashboard/events-dashboard.component';
import { IndividualEventComponent } from './pages/events/individual-event/individual-event.component';
import { EventPreviewComponent } from './pages/events/event-preview/event-preview.component';
import { EventPreviewModule } from '../uikit/events/event-preview/event-preview.module';
import { EventEditModule } from '../uikit/events/event-edit/event-edit.module';
import { EventsUiKitModule } from '../uikit/events/events-ui-kit/events-ui-kit.module';
import { ViewRegistrationsModule } from '../uikit/registrations/view-registrations/view-registrations.module';
import { ViewSurveysModule } from '../uikit/surveys/view-surveys/view-surveys.module';
import { ViewTournamentsModule } from '../uikit/tournaments/view-tournaments/view-tournaments.module';
import { ViewPostsModule } from '../uikit/posts/view-posts/view-posts.module';
import { ActivitiesModule } from '../uikit/global/activities/activities.module';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsDashboardComponent } from './pages/posts/posts-dashboard/posts-dashboard.component';
import { AssociationsDashboardComponent } from './pages/associations/associations-dashboard/associations-dashboard.component';
import { AssociationsComponent } from './pages/associations/associations.component';
import { RegionstatsModule } from '../uikit/regionstats/regionstats.module';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { SurveysDashboardComponent } from './pages/surveys/surveys-dashboard/surveys-dashboard.component';
import { AdminTournamentsComponent } from './pages/adminTournaments/admin-tournaments.component';
import { AdminTournamentsDashboardComponent } from './pages/adminTournaments/admin-tournaments-dashboard/admin-tournaments-dashboard.component';
import { AdminNewTournamentComponent } from './pages/adminTournaments/admin-new-tournament/admin-new-tournament.component';

@NgModule({
  declarations: [
    EventsComponent,
    HomeComponent,
    UserManagementComponent,
    EventsDashboardComponent,
    IndividualEventComponent,
    EventPreviewComponent,
    PostsComponent,
    PostsDashboardComponent,
    AssociationsDashboardComponent,
    AssociationsComponent,
    SurveysComponent,
    SurveysDashboardComponent,
    AdminTournamentsComponent,
    AdminTournamentsDashboardComponent,
    AdminNewTournamentComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    // ui kit
    HeaderModule,
    EventPreviewModule,
    EventEditModule,
    EventsUiKitModule,
    ViewRegistrationsModule,
    ViewTournamentsModule,
    ViewSurveysModule,
    ViewPostsModule,
    ActivitiesModule,
    RegionstatsModule,
    // mat 
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
  ],
  entryComponents: [],
})
export class AdminModule {}
