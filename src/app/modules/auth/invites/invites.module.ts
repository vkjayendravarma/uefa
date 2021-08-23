import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteToPlatformComponent } from './invite-to-platform/invite-to-platform.component';
import { InvitesRouterModule } from './invites-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InviteToPlatformComponent
  ],
  imports: [
    CommonModule,
    InvitesRouterModule,
    MatButtonModule
  ]
})
export class InvitesModule { }
