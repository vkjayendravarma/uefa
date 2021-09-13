import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys/surveys.component';
import { MatIconModule } from '@angular/material/icon';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { SureveysElementComponent } from './sureveys-element/sureveys-element.component';
import { SurveysTabViewComponent } from './surveys-tab-view/surveys-tab-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AnswerSurveysComponent } from './answer-surveys/answer-surveys.component';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilderModule } from '../../form-builder/form-builder.module';
import { SurveyDoneComponent } from './survey-done/survey-done.component';

@NgModule({
  declarations: [
    SurveysComponent,
    SureveysElementComponent,
    SurveysTabViewComponent,
    AnswerSurveysComponent,
    SurveyDoneComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule,
    MatTabsModule,
    FormBuilderModule,
    MatButtonModule,
  ],
  exports: [
    SurveysComponent,
    SurveysTabViewComponent,
    AnswerSurveysComponent,
    SurveyDoneComponent,
  ],
})
export class ViewSurveysModule {}
