import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { InstitutePresetComponent } from './components/institute-preset/institute-preset.component';
import { InstituteProfileComponent } from './components/institute-profile/institute-profile.component';
import { InstituteRequestJoinSuccessMessageComponent } from './components/institute-request-join-success-message/institute-request-join-success-message.component';
import { InstituteRequestJoinComponent } from './components/institute-request-join/institute-request-join.component';
import { InviteUsersComponent } from './components/invite-users/invite-users.component';
import { RaDetailsSuccessComponent } from './components/ra/ra-details-success/ra-details-success.component';
import { RaDetailsComponent } from './components/ra/ra-details/ra-details.component';
import { PlayerSignupSuccessComponent } from './components/player-signup-success/player-signup-success.component';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';

const routes: Routes = [
  {
    path: 'create-profile/:invitehash',
    component: CreateProfileComponent,
  },{
    path: 'institutedata/:id',
    component: InstitutePresetComponent,
  },{ 
    path: 'institute/new/:id',
    component: InstituteProfileComponent
  },{ 
    path: 'institute/joinas',
    component: InstituteRequestJoinComponent
  },{ 
    path: 'institute/joinas/success',
    component: InstituteRequestJoinSuccessMessageComponent
  },{
    path: 'inviteusers/:invitehash',
    component: InviteUsersComponent
  },{
    path: 'ra/details',
    component: RaDetailsComponent
  },{
    path: 'ra/success',
    component: RaDetailsSuccessComponent
  },{
    path: 'signup-success/:id',
    component: PlayerSignupSuccessComponent,
  },{
    path: 'player-register-profile/:id',
    component: RegisterProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRouterModule { }
