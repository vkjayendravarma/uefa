import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';

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

  // {
  //   path: 'surveys',
  //   component: FSurveysComponent,
  // },
  // {
  //   path: 'posts',
  //   component: FPostsComponent}

  //    {
  //   path: 'events',
  //   component: FEventsComponent},
  //    {
  //   path: 'tournaments',
  //   component: FTournamentsComponent},

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
