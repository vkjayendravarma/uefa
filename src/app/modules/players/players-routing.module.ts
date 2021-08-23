import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: PDashboardComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRouterModule {}
