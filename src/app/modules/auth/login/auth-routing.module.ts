import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

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
            path: 'session/:authType',
            component: LoginformComponent
          },
          {
            path: 'success',
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
