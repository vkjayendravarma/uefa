import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteToPlatformComponent } from './invite-to-platform/invite-to-platform.component';
import { InvitesRouterModule } from './invites-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { EmailTemplateInviteComponent } from './email-template-invite/email-template-invite.component';
import { MatIconModule } from '@angular/material/icon';
import { EmailTemplateRegistrationApprovedComponent } from './email-template-registration-approved/email-template-registration-approved.component';
import { InviteDependentToPlatformComponent } from './invite-dependent-to-platform/invite-dependent-to-platform.component';
import { FEmailTemplateComponent } from './f-email-template/f-email-template.component';
import { ResetPasswordEmailTemplateComponent } from './reset-password-email-template/reset-password-email-template.component';

@NgModule({
  declarations: [InviteToPlatformComponent, EmailTemplateInviteComponent, EmailTemplateRegistrationApprovedComponent, InviteDependentToPlatformComponent, FEmailTemplateComponent, ResetPasswordEmailTemplateComponent],
  imports: [CommonModule, InvitesRouterModule, MatButtonModule, MatIconModule],
})
export class InvitesModule {}
