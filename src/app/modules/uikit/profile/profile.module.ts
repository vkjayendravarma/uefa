import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { FormUiElementsModule } from '../form-ui-elements/form-ui-elements.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
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
  exports: [ProfileComponent],
})
export class ProfileModule {}
