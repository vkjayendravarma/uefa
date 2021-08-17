import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPreviewComponent } from './pages/events/event-preview/event-preview.component';
import { EventsDashboardComponent } from './pages/events/events-dashboard/events-dashboard.component';

import { EventsComponent } from './pages/events/events.component';
import { IndividualEventComponent } from './pages/events/individual-event/individual-event.component';
import { HomeComponent } from './pages/home/home.component';
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
    path: 'users',
    component: UserManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouterModule {}
