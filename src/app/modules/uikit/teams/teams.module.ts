import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsGalaryViewComponent } from './teams-galary-view/teams-galary-view.component';
import { TeamsElementComponent } from './teams-element/teams-element.component';
import { MatIconModule } from '@angular/material/icon';
import { TeamsSingleViewComponent } from './teams-single-view/teams-single-view.component';
import { TeamAttendanceComponent } from './team-attendance/team-attendance.component';



@NgModule({
  declarations: [
    TeamsGalaryViewComponent,
    TeamsElementComponent,
    TeamsSingleViewComponent,
    TeamAttendanceComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [TeamsGalaryViewComponent, TeamAttendanceComponent]
})
export class TeamsModule { }
