import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventEditComponent } from '../uikit/events/event-edit/event-edit.component';
import { TeamMemberDetailsEditComponent } from '../uikit/teams/team-management/team-members-manage-view/team-member-details-edit/team-member-details-edit.component';
import { TeamMemberDetailsComponent } from '../uikit/teams/team-management/team-members-manage-view/team-member-details/team-member-details.component';
import { TeamSessionManageMembersComponent } from '../uikit/teams/team-management/team-sessions/team-session-manage-members/team-session-manage-members.component';
import { TeamSquadComponent } from '../uikit/teams/team-management/team-squad/team-squad.component';
import { FTeamManagementAnnouncementsComponent } from './components/team-management/f-team-management-announcements/f-team-management-announcements.component';
import { FTeamManagementAttendanceComponent } from './components/team-management/f-team-management-attendance/f-team-management-attendance.component';
import { FTeamManagementDocumentsComponent } from './components/team-management/f-team-management-documents/f-team-management-documents.component';
import { FTeamManagementHomeComponent } from './components/team-management/f-team-management-home/f-team-management-home.component';
import { FTeamManagementMembersComponent } from './components/team-management/f-team-management-members/f-team-management-members.component';
import { FTeamManagementSessionsComponent } from './components/team-management/f-team-management-sessions/f-team-management-sessions.component';
import { FTeamManagementSquadsComponent } from './components/team-management/f-team-management-squads/f-team-management-squads.component';
import { FEventsDashboardComponent } from './pages/f-events/f-events-dashboard/f-events-dashboard.component';
import { FEventsIndividualComponent } from './pages/f-events/f-events-individual/f-events-individual.component';
import { FEventsPreviewComponent } from './pages/f-events/f-events-preview/f-events-preview.component';
import { FEventsComponent } from './pages/f-events/f-events.component';
import { FHomeComponent } from './pages/f-home/f-home.component';
import { FCreateNewPostComponent } from './pages/f-posts/f-create-new-post/f-create-new-post.component';
import { FPostsDashboardComponent } from './pages/f-posts/f-posts-dashboard/f-posts-dashboard.component';
import { FPostsComponent } from './pages/f-posts/f-posts.component';
import { FCreateNewSurveyComponent } from './pages/f-surveys/f-create-new-survey/f-create-new-survey.component';
import { FSurveysDashboardComponent } from './pages/f-surveys/f-surveys-dashboard/f-surveys-dashboard.component';
import { FSurveysComponent } from './pages/f-surveys/f-surveys.component';
import { FTeamViewComponent } from './pages/f-teams/f-team-view/f-team-view.component';
import { FTeamsDashboardComponent } from './pages/f-teams/f-teams-dashboard/f-teams-dashboard.component';
import { FTeamsComponent } from './pages/f-teams/f-teams.component';
import { FTournamentsDashboardComponent } from './pages/f-tournaments/f-tournaments-dashboard/f-tournaments-dashboard.component';
import { FTournamentsMonitorComponent } from './pages/f-tournaments/f-tournaments-monitor/f-tournaments-monitor.component';
import { FTournamentsPreviewComponent } from './pages/f-tournaments/f-tournaments-preview/f-tournaments-preview.component';
import { FTournamentsRegisterComponent } from './pages/f-tournaments/f-tournaments-register/f-tournaments-register.component';
import { FTournamentsComponent } from './pages/f-tournaments/f-tournaments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
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
        component: FEventsDashboardComponent,
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
        component: FPostsDashboardComponent,
      },
      {
        path: 'create',
        component: FCreateNewPostComponent,
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
      {
        path: 'new',
        component: FCreateNewSurveyComponent,
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
        path: 'preview',
        component: FTournamentsPreviewComponent,
      },
      {
        path: 'register',
        component: FTournamentsRegisterComponent,
      },
      {
        path: 'monitor',
        component: FTournamentsMonitorComponent,
      },
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
        children: [
          {
            path: '',
            redirectTo: 'home',
          },
          {
            path: 'home',
            component: FTeamManagementHomeComponent,
          },
          {
            path: 'members',
            component: FTeamManagementMembersComponent,
            children: [
              {
                path: 'details/:id',
                component: TeamMemberDetailsComponent,
              },
              {
                path: 'details/:id/edit',
                component: TeamMemberDetailsEditComponent,
              },
            ],
          },
          {
            path: 'sessions',
            children: [
              {
                path: '',
                component: FTeamManagementSessionsComponent,
              },
              {
                path: 'invites/:id',
                component: TeamSessionManageMembersComponent,
              },
            ],
          },
          {
            path: 'documents',
            component: FTeamManagementDocumentsComponent,
          },
          {
            path: 'squads',
            component: FTeamManagementSquadsComponent,
            children: [
              {
                path: 'details/:id',
                component: TeamSquadComponent,
              },
            ],
          },
          {
            path: 'attendance',
            component: FTeamManagementAttendanceComponent,
          },
          {
            path: 'announcements',
            component: FTeamManagementAnnouncementsComponent,
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
export class FacilitatorsRouterModule {}
