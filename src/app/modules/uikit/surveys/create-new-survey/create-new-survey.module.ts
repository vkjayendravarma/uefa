import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailsComponent } from './components/survey-details/survey-details.component';
import { SurveyPreviewComponent } from './components/survey-preview/survey-preview.component';
import { SurveyPublishComponent } from './components/survey-publish/survey-publish.component';
import { SurveyResponcesComponent } from './components/survey-responces/survey-responces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [SurveyDetailsComponent, SurveyPreviewComponent, SurveyPublishComponent, SurveyResponcesComponent, CreateNewSurveyModule],
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
  ],
  exports: [CreateNewSurveyModule]
})
export class CreateNewSurveyModule { }
