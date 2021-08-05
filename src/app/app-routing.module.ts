import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./modules/auth/auth.module").then(module => module.AuthModule)
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import("./modules/admin/admin.module").then(module=> module.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
