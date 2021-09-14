import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { WithoutAuthGuard } from 'src/app/guards/without-auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
          {
            path: '',
            redirectTo: 'session/:authType',
            pathMatch: 'full'
          },
          {
            path: 'session/signup',
            canActivate: [WithoutAuthGuard],
            component: SignupformComponent
          },
          {
            path: 'session/:authType',
            canActivate: [WithoutAuthGuard],
            component: LoginformComponent
          },
          {
            path: 'success',
            canActivate: [WithoutAuthGuard],
            component: SignupSuccessComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouterModule { }
