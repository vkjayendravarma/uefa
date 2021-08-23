import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillsSessionsComponent } from './drills-sessions.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DrillsSessionsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [DrillsSessionsComponent]
})
export class DrillsSessionsModule { }
