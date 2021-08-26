import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRadioSingleAnswerComponent } from './components/form-radio-single-answer/form-radio-single-answer.component';
import { FormInputTextComponent } from './components/form-input-text/form-input-text.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormRenderComponent } from './form-render/form-render.component';
import { FormBuilderComponent } from './builder/form-builder.component';


@NgModule({
  declarations: [
    FormBuilderComponent,
    FormRadioSingleAnswerComponent,
    FormInputTextComponent,
    FormRenderComponent,
    
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
    DragDropModule,
    MatRadioModule,
  ],
  exports: [FormBuilderComponent,FormRenderComponent]
})
export class FormBuilderModule { }
