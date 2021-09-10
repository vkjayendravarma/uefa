import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { CalendarsModule } from '../uikit/calendars/calendars.module';
import { PlayerRouterModule } from './players-routing.module';
import { HeaderModule } from '../uikit/header/header.module';

@NgModule({
  declarations: [PDashboardComponent],
  imports: [CommonModule, PlayerRouterModule, CalendarsModule, HeaderModule],
})
export class PlayersModule {}
