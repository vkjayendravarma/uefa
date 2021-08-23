import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditTournamentComponent } from './create-edit-tournament.component';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { FormUiElementsModule } from '../../form-ui-elements/form-ui-elements.module';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    CreateEditTournamentComponent
  ],
  imports: [
    CommonModule, 
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
    MatChipsModule ,
    MatRadioModule,
  ],
  exports: [CreateEditTournamentComponent]
})
export class CreateEditTournamentModule { }
