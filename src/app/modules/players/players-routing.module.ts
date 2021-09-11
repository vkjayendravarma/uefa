import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PTeamManagementAnnouncementsComponent } from './components/team-management/p-team-management-announcements/p-team-management-announcements.component';
import { PTeamManagementAttendanceComponent } from './components/team-management/p-team-management-attendance/p-team-management-attendance.component';
import { PTeamManagementDocumentsComponent } from './components/team-management/p-team-management-documents/p-team-management-documents.component';
import { PTeamManagementHomeComponent } from './components/team-management/p-team-management-home/p-team-management-home.component';
import { PTeamManagementSessionsComponent } from './components/team-management/p-team-management-sessions/p-team-management-sessions.component';
import { PTeamManagementSquadsComponent } from './components/team-management/p-team-management-squads/p-team-management-squads.component';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { PEventsComponent } from './pages/p-events/p-events.component';
import { PPostsComponent } from './pages/p-posts/p-posts.component';
import { PSurveysComponent } from './pages/p-surveys/p-surveys.component';
import { PTeamViewComponent } from './pages/p-teams/p-team-view/p-team-view.component';
import { PTeamsComponent } from './pages/p-teams/p-teams.component';
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
    component: PTeamsComponent,
    children: [
      {
        path: '',
        // component: FTeamsDashboardComponent,
      },
      {
        path: 'team',
        component: PTeamViewComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
          },
          {
            path: 'home',
            component: PTeamManagementHomeComponent,
          },

          {
            path: 'sessions',
            children: [
              {
                path: '',
                component: PTeamManagementSessionsComponent,
              },
              {
                path: 'invites/:id',
                // component: TeamSessionManageMembersComponent,
              },
            ],
          },
          {
            path: 'documents',
            component: PTeamManagementDocumentsComponent,
          },
          {
            path: 'squads',
            component: PTeamManagementSquadsComponent,
            children: [
              {
                path: 'details/:id',
                // component: TeamSquadComponent,
              },
            ],
          },
          {
            path: 'attendance',
            component: PTeamManagementAttendanceComponent,
          },
          {
            path: 'announcements',
            component: PTeamManagementAnnouncementsComponent,
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
