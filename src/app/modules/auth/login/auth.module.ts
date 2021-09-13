import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { AuthRouterModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordSuccessComponent } from './reset-password-success/reset-password-success.component';
import { SignupSuccessfulComponent } from './player-signup-successful/signup-successful.component';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent,
    SignupSuccessComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent,
    ResetPasswordSuccessComponent,
    SignupSuccessfulComponent,
    DateOfBirthComponent,
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AuthModule {}
