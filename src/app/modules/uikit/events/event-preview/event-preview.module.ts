import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-preview.component';
import { HeaderModule } from '../../header/header.module';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormUiElementsModule } from '../../form-ui-elements/form-ui-elements.module';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [EventPreviewComponent],
  imports: [
    CommonModule,
    HeaderModule,
    TagChipsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormUiElementsModule,
    RouterModule,
    MatChipsModule,
    MatRadioModule,
  ],
  exports: [EventPreviewComponent],
})
export class EventPreviewModule {}
