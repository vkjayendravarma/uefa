import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./modules/auth/login/auth.module").then(module => module.AuthModule)
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import("./modules/admin/admin.module").then(module=> module.AdminModule)
      },
      {
        path: 'facilitator',
        loadChildren: () => import("./modules/facilitators/facilitators.module").then(module=> module.FacilitatorsModule)
      },
     
    ]
  },
  {
    path: 'event/regester',
    loadChildren: () => import("./modules/uikit/events/event-register/event-register.module").then(module=> module.EventRegisterModule)
  }, { 
    path: 'signup',
    loadChildren: () => import("./modules/auth/signup/signup.module").then(module=> module.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
