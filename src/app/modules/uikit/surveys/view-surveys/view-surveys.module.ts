import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys/surveys.component';
import { MatIconModule } from '@angular/material/icon';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';



@NgModule({
  declarations: [SurveysComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule
  ],
  exports: [SurveysComponent]
})
export class ViewSurveysModule { }
