import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationsDashboardComponent } from './pages/associations/associations-dashboard/associations-dashboard.component';
import { AssociationsComponent } from './pages/associations/associations.component';
import { EventPreviewComponent } from './pages/events/event-preview/event-preview.component';
import { EventsDashboardComponent } from './pages/events/events-dashboard/events-dashboard.component';

import { EventsComponent } from './pages/events/events.component';
import { IndividualEventComponent } from './pages/events/individual-event/individual-event.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsDashboardComponent } from './pages/posts/posts-dashboard/posts-dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

const routes: Routes = [
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
        component: EventsDashboardComponent
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
        component: PostsDashboardComponent
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
        component: AssociationsDashboardComponent
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouterModule {}
