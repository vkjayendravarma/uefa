import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEditComponent } from './event-edit.component';
import { HeaderModule } from '../../header/header.module';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormUiElementsModule } from '../../form-ui-elements/form-ui-elements.module';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    EventEditComponent
  ],
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
    NgxMaterialTimepickerModule
  ],
  exports: [EventEditComponent]
})
export class EventEditModule { }
