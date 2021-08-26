import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailsComponent } from './components/survey-details/survey-details.component';
import { SurveyPreviewComponent } from './components/survey-preview/survey-preview.component';
import { SurveyPublishComponent } from './components/survey-publish/survey-publish.component';
import { SurveyResponcesComponent } from './components/survey-responces/survey-responces.component';
import { CreateNewSurveyComponent } from './create-new-survey.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilderModule } from '../../form-builder/form-builder.module';



@NgModule({
  declarations: [
    SurveyDetailsComponent,
    SurveyPreviewComponent,
    SurveyPublishComponent,
    SurveyResponcesComponent,
    CreateNewSurveyComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    TagChipsModule,
    MatStepperModule,
    FormBuilderModule
  ],
  exports: [CreateNewSurveyComponent]
})
export class CreateNewSurveyModule { }
