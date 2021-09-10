import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { CalendarsModule } from '../uikit/calendars/calendars.module';
import { PlayerRouterModule } from './players-routing.module';
import { HeaderModule } from '../uikit/header/header.module';
import { DrillsSessionsModule } from '../uikit/drills-sessions/drills-sessions.module';
import { EventsUiKitModule } from '../uikit/events/events-ui-kit/events-ui-kit.module';
import { TeamsModule } from '../uikit/teams/teams.module';
import { ViewPostsModule } from '../uikit/posts/view-posts/view-posts.module';

@NgModule({
  declarations: [PDashboardComponent],
  imports: [
    CommonModule,
    PlayerRouterModule,
    CalendarsModule,
    HeaderModule,
    EventsUiKitModule,
    DrillsSessionsModule,
    TeamsModule,
    ViewPostsModule,
  ],
})
export class PlayersModule {}
