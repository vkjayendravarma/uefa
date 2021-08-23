import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { CalendarsModule } from '../uikit/calendars/calendars.module';
import { PlayerRouterModule } from './players-routing.module';



@NgModule({
  declarations: [
    PDashboardComponent
  ],
  imports: [
    CommonModule,
    PlayerRouterModule,
    CalendarsModule
  ]
})
export class PlayersModule { }
