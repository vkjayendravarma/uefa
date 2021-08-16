import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from '../uikit/pages/create-event/create-event.component';
import { EventPreviewComponent } from '../uikit/pages/event-preview/event-preview.component';
import { EventsComponent } from './pages/events/events.component';
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
  },
  {
    path: 'events/create',
    component: CreateEventComponent,
  },{
    path: 'events/preview',
    component: EventPreviewComponent,
  },{
    path: 'users',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouterModule {}
