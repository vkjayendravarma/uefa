import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys/surveys.component';
import { MatIconModule } from '@angular/material/icon';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { SureveysElementComponent } from './sureveys-element/sureveys-element.component';
import { SurveysTabViewComponent } from './surveys-tab-view/surveys-tab-view.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [SurveysComponent, SureveysElementComponent, SurveysTabViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule,
    MatTabsModule
  ],
  exports: [SurveysComponent, SurveysTabViewComponent]
})
export class ViewSurveysModule { }
