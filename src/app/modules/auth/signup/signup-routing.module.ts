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

const routes: Routes = [
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },{
    path: 'institutedata',
    component: InstitutePresetComponent,
  }, { 
    path: 'institute/new',
    component: InstituteProfileComponent
  },{ 
    path: 'institute/joinas',
    component: InstituteRequestJoinComponent
  }, { 
    path: 'institute/joinas/success',
    component: InstituteRequestJoinSuccessMessageComponent
  },{
    path: 'inviteusers',
    component: InviteUsersComponent
  },
  {
    path: 'ra/details',
    component: RaDetailsComponent
  },
  {
    path: 'ra/success',
    component: RaDetailsSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRouterModule { }
