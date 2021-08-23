import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthViewComponent } from './month-view/month-view.component';
import { WeekViewComponent } from './week-view/week-view.component';



@NgModule({
  declarations: [
    MonthViewComponent,
    WeekViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MonthViewComponent, WeekViewComponent]
})
export class CalendarsModule { }
