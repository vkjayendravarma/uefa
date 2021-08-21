import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsElementComponent } from './stats-element/stats-element.component';
import { StatsListViewComponent } from './stats-list-view/stats-list-view.component';
import { TagChipsModule } from '../global/tag-chips/tag-chips.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RaCriteriaViewComponent } from './ra-criteria-view/ra-criteria-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { FormUiElementsModule } from '../form-ui-elements/form-ui-elements.module';



@NgModule({
  declarations: [
    StatsElementComponent,
    StatsListViewComponent,
    RaCriteriaViewComponent
  ],
  imports: [
    CommonModule,
    TagChipsModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    FormUiElementsModule,
    
  ],
  exports: [StatsListViewComponent, RaCriteriaViewComponent]
})
export class AssociationsModule { }
