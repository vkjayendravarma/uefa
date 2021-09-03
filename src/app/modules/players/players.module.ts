import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../uikit/header/header.module';
import { CalendarsModule } from '../uikit/calendars/calendars.module';
import { PlayerRouterModule } from './players-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { EventsUiKitModule } from '../uikit/events/events-ui-kit/events-ui-kit.module';
import { TeamsModule } from '../uikit/teams/teams.module';
import { DrillsSessionsModule } from '../uikit/drills-sessions/drills-sessions.module';
import { ViewPostsModule } from '../uikit/posts/view-posts/view-posts.module';

import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';




@NgModule({
  declarations: [
    PDashboardComponent
  ],
  imports: [
    CommonModule,
    PlayerRouterModule,
    CalendarsModule,
    HeaderModule,
    MatIconModule,
    EventsUiKitModule,
    TeamsModule,
    DrillsSessionsModule,
    ViewPostsModule
  ]
})
export class PlayersModule { }
