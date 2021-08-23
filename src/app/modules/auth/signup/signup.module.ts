import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRouterModule } from './signup-routing.module';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { InviteUsersComponent } from './components/invite-users/invite-users.component';
import { InstitutePresetComponent } from './components/institute-preset/institute-preset.component';
import { InstituteProfileComponent } from './components/institute-profile/institute-profile.component';
import { InstituteRequestJoinComponent } from './components/institute-request-join/institute-request-join.component';
import { InstituteRequestJoinSuccessMessageComponent } from './components/institute-request-join-success-message/institute-request-join-success-message.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormUiElementsModule } from '../../uikit/form-ui-elements/form-ui-elements.module';
import { RaDetailsComponent } from './components/ra/ra-details/ra-details.component';
import { RaDetailsSuccessComponent } from './components/ra/ra-details-success/ra-details-success.component';

@NgModule({
  declarations: [
    CreateProfileComponent,
    InviteUsersComponent,
    InstitutePresetComponent,
    InstituteProfileComponent,
    InstituteRequestJoinComponent,
    InstituteRequestJoinSuccessMessageComponent,
    RaDetailsComponent,
    RaDetailsSuccessComponent
  ],
  imports: [
    CommonModule,
    SignupRouterModule,
    MatIconModule,
    FormUiElementsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatRadioModule,
    RouterModule
  ]
})
export class SignupModule { }
