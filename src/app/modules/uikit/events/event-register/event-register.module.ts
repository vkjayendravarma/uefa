import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRegisterComponent } from './event-register.component';
import { EventRegisterRouterModule } from './event-register-router.module';
import { MatIconModule } from '@angular/material/icon';
import { FormUiElementsModule } from '../../form-ui-elements/form-ui-elements.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EventRegisterComponent
  ],
  imports: [
    CommonModule,
    EventRegisterRouterModule,
    MatIconModule,
    FormUiElementsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatRadioModule,
    RouterModule
  ]
})
export class EventRegisterModule { }
