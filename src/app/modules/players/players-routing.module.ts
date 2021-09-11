import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { PEventsComponent } from './pages/p-events/p-events.component';
import { PPostsComponent } from './pages/p-posts/p-posts.component';
import { PSurveysComponent } from './pages/p-surveys/p-surveys.component';
import { PTournamentsComponent } from './pages/p-tournaments/p-tournaments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PDashboardComponent,
  },

  {
    path: 'surveys',
    component: PSurveysComponent,
  },
  {
    path: 'posts',
    component: PPostsComponent,
  },

  {
    path: 'events',
    component: PEventsComponent,
  },
  {
    path: 'tournaments',
    component: PTournamentsComponent,
  },

  {
    path: 'teams',
    // component: FTeamsComponent,
    children: [
      {
        path: '',
        // component: FTeamsDashboardComponent,
      },
      {
        path: 'team',
        // component: FTeamViewComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
          },
          {
            path: 'home',
            // component: FTeamManagementHomeComponent,
          },
          {
            path: 'members',
            // component: FTeamManagementMembersComponent,
            children: [
              {
                path: 'details/:id',
                // component: TeamMemberDetailsComponent,
              },
              {
                path: 'details/:id/edit',
                // component: TeamMemberDetailsEditComponent,
              },
            ],
          },
          {
            path: 'sessions',
            children: [
              {
                path: '',
                // component: FTeamManagementSessionsComponent,
              },
              {
                path: 'invites/:id',
                // component: TeamSessionManageMembersComponent,
              },
            ],
          },
          {
            path: 'documents',
            // component: FTeamManagementDocumentsComponent,
          },
          {
            path: 'squads',
            // component: FTeamManagementSquadsComponent,
            children: [
              {
                path: 'details/:id',
                // component: TeamSquadComponent,
              },
            ],
          },
          {
            path: 'attendance',
            // component: FTeamManagementAttendanceComponent,
          },
          {
            path: 'announcements',
            // component: FTeamManagementAnnouncementsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRouterModule {}
