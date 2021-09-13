import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordSuccessComponent } from './reset-password-success/reset-password-success.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SignupSuccessfulComponent } from './player-signup-successful/signup-successful.component';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'session/login',
        pathMatch: 'full',
      },
      {
        path: 'session/:authType',
        component: LoginformComponent,
      },
      {
        path: 'success',
        component: SignupSuccessComponent,
      },
      {
        path: 'recover-password',
        component: RecoverPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'reset-password-success',
        component: ResetPasswordSuccessComponent,
      },
      {
        path: 'signup-success',
        component: SignupSuccessfulComponent,
      },
      {
        path: 'date-of-birth',
        component: DateOfBirthComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouterModule {}
