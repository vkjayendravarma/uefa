import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalActivitiesComponent } from './global-activities.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GlobalActivitiesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GlobalActivitiesComponent]
})
export class ActivitiesModule { }
