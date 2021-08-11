import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from '../uikit/pages/create-event/create-event.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
    {
        path: 'events',
        component: EventsComponent,       
    },
    {
      path: 'events/create',
      component: CreateEventComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouterModule { }
