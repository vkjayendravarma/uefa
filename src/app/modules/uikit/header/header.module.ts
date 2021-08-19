import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CreateNewEventModelComponent } from './models/create-new-event-model/create-new-event-model.component';
import { InviteUserModelComponent } from './models/invite-user-model/invite-user-model.component';
import { FormUiElementsModule } from '../form-ui-elements/form-ui-elements.module';
import { RouterModule } from '@angular/router';
import { CreateNewSurveyModelComponent } from './models/create-new-survey-model/create-new-survey-model.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CreateNewEventModelComponent,
    InviteUserModelComponent,
    CreateNewSurveyModelComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormUiElementsModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  entryComponents: [CreateNewEventModelComponent, InviteUserModelComponent, CreateNewSurveyModelComponent]
})
export class HeaderModule { }
