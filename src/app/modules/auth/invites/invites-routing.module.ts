import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplateInviteComponent } from './email-template-invite/email-template-invite.component';
import { EmailTemplateRegistrationApprovedComponent } from './email-template-registration-approved/email-template-registration-approved.component';
import { InviteDependentToPlatformComponent } from './invite-dependent-to-platform/invite-dependent-to-platform.component';
import { InviteToPlatformComponent } from './invite-to-platform/invite-to-platform.component';

const routes: Routes = [
  {
    path: '',
    component: InviteToPlatformComponent,
  },
  {
    path: 'invitedependents',
    component: InviteDependentToPlatformComponent,
  },
  {
    path: 'invite-mail',
    component: EmailTemplateInviteComponent,
  },
  {
    path: 'invite-mail-register',
    component: EmailTemplateRegistrationApprovedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitesRouterModule {}
