import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteToPlatformComponent } from './invite-to-platform/invite-to-platform.component';

const routes: Routes = [
  {
    path: '',
    component: InviteToPlatformComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitesRouterModule {}
