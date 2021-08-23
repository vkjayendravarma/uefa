import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FEventsDashboardComponent } from './pages/f-events/f-events-dashboard/f-events-dashboard.component';
import { FEventsIndividualComponent } from './pages/f-events/f-events-individual/f-events-individual.component';
import { FEventsPreviewComponent } from './pages/f-events/f-events-preview/f-events-preview.component';
import { FEventsComponent } from './pages/f-events/f-events.component';
import { FHomeComponent } from './pages/f-home/f-home.component';
import { FPostsDashboardComponent } from './pages/f-posts/f-posts-dashboard/f-posts-dashboard.component';
import { FPostsComponent } from './pages/f-posts/f-posts.component';
import { FSurveysDashboardComponent } from './pages/f-surveys/f-surveys-dashboard/f-surveys-dashboard.component';
import { FSurveysComponent } from './pages/f-surveys/f-surveys.component';
import { FTeamViewComponent } from './pages/f-teams/f-team-view/f-team-view.component';
import { FTeamsDashboardComponent } from './pages/f-teams/f-teams-dashboard/f-teams-dashboard.component';
import { FTeamsComponent } from './pages/f-teams/f-teams.component';
import { FTournamentsDashboardComponent } from './pages/f-tournaments/f-tournaments-dashboard/f-tournaments-dashboard.component';
import { FTournamentsRegisterComponent } from './pages/f-tournaments/f-tournaments-register/f-tournaments-register.component';
import { FTournamentsComponent } from './pages/f-tournaments/f-tournaments.component';


const routes: Routes = [
  {
    path: 'home',
    component: FHomeComponent,
  },
  {
    path: 'events',
    component: FEventsComponent,
    children: [
      {
        path: '',
        component: FEventsDashboardComponent
      },
      {
        path: 'individualevent',
        component: FEventsIndividualComponent,
      },
      {
        path: 'preview',
        component: FEventsPreviewComponent,
      },
    ],
  },
  {
    path: 'posts',
    component: FPostsComponent,
    children: [
      {
        path: '',
        component: FPostsDashboardComponent
      },
     
    ],
  },
//   {
//     path: 'users',
//     component: UserManagementComponent,
//   },
//   {
//     path: 'associations',
//     component: AssociationsComponent,
//     children: [
//       {
//         path: '',
//         component: AssociationsDashboardComponent
//       },
     
//     ],
//   },
  {
    path: 'surveys',
    component: FSurveysComponent,
    children: [
      {
        path: '',
        component: FSurveysDashboardComponent,
      },
     
    ],
  },
  {
    path: 'tournaments',
    component: FTournamentsComponent,
    children: [
      {
        path: '',
        component: FTournamentsDashboardComponent,
      },
      {
        path: 'register',
        component: FTournamentsRegisterComponent,
      }
     
    ],
  },
  {
    path: 'teams',
    component: FTeamsComponent,
    children: [
      {
        path: '',
        component: FTeamsDashboardComponent,
      },
      {
        path: 'team',
        component: FTeamViewComponent,
      }
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitatorsRouterModule {}
