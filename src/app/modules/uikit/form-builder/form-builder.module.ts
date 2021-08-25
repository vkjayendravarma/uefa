import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { FormRadioSingleAnswerComponent } from './components/form-radio-single-answer/form-radio-single-answer.component';
import { FormInputTextComponent } from './components/form-input-text/form-input-text.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FormBuilderComponent,
    FormRadioSingleAnswerComponent,
    FormInputTextComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
