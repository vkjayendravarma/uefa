import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTournamentsComponent } from './pages/adminTournaments/admin-tournaments.component';
import { AdminTournamentsDashboardComponent } from './pages/adminTournaments/admin-tournaments-dashboard/admin-tournaments-dashboard.component';
import { AssociationsDashboardComponent } from './pages/associations/associations-dashboard/associations-dashboard.component';
import { AssociationsComponent } from './pages/associations/associations.component';
import { EventPreviewComponent } from './pages/events/event-preview/event-preview.component';
import { EventsDashboardComponent } from './pages/events/events-dashboard/events-dashboard.component';

import { EventsComponent } from './pages/events/events.component';
import { IndividualEventComponent } from './pages/events/individual-event/individual-event.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsDashboardComponent } from './pages/posts/posts-dashboard/posts-dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SurveysDashboardComponent } from './pages/surveys/surveys-dashboard/surveys-dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { AdminNewTournamentComponent } from './pages/adminTournaments/admin-new-tournament/admin-new-tournament.component';
import { ACreateNewPostComponent } from './pages/posts/a-create-new-post/a-create-new-post.component';
import { AAssociationsCriteriaComponent } from './pages/associations/a-associations-criteria/a-associations-criteria.component';
import { AdminMonitorTournamentComponent } from './pages/adminTournaments/admin-monitor-tournament/admin-monitor-tournament.component';
import { ANewSurveyComponent } from './pages/surveys/a-new-survey/a-new-survey.component';
import { AProfileComponent } from './pages/a-profile/a-profile.component';
import { EventEditComponent } from '../uikit/events/event-edit/event-edit.component';
import { AAssociationsCriteriaAcceptComponent } from './pages/associations/a-associations-criteria-accept/a-associations-criteria-accept.component';
import { AAssociationsCriteriaEditComponent } from './pages/associations/a-associations-criteria-edit/a-associations-criteria-edit.component';
import { AAssociationDrilldownComponent } from './pages/associations/a-association-drilldown/a-association-drilldown.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      {
        path: '',
        component: EventsDashboardComponent,
      },
      {
        path: 'individualevent',
        component: IndividualEventComponent,
      },
      {
        path: 'preview',
        component: EventPreviewComponent,
      },
    ],
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostsDashboardComponent,
      },
      {
        path: 'create',
        component: ACreateNewPostComponent,
      },
    ],
  },
  {
    path: 'users',
    component: UserManagementComponent,
  },
  {
    path: 'associations',
    component: AssociationsComponent,
    children: [
      {
        path: '',
        component: AssociationsDashboardComponent,
      },
      {
        path: 'criteria',
        component: AAssociationsCriteriaComponent,
      },
      {
        path: 'approval',
        component: AAssociationsCriteriaAcceptComponent,
      },
      {
        path: 'edit',
        component: AAssociationsCriteriaEditComponent,
      },
      {
        path: 'drilldown/:name',
        component: AAssociationDrilldownComponent,
      },
    ],
  },
  {
    path: 'surveys',
    component: SurveysComponent,
    children: [
      {
        path: '',
        component: SurveysDashboardComponent,
      },
      {
        path: 'new',
        component: ANewSurveyComponent,
      },
    ],
  },
  {
    path: 'tournaments',
    component: AdminTournamentsComponent,
    children: [
      {
        path: '',
        component: AdminTournamentsDashboardComponent,
      },
      {
        path: 'new',
        component: AdminNewTournamentComponent,
      },
      {
        path: 'monitor',
        component: AdminMonitorTournamentComponent,
      },
    ],
  },
  {
    path: 'profile',
    component: AProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouterModule {}
