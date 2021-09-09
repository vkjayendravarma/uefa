import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { CreateNewTeamComponent } from './models/create-new-team/create-new-team.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    HeaderComponent,
    CreateNewEventModelComponent,
    InviteUserModelComponent,
    CreateNewSurveyModelComponent,
    CreateNewTeamComponent,
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
    RouterModule,
    MatRadioModule,
  ],
  exports: [HeaderComponent],
  entryComponents: [
    CreateNewEventModelComponent,
    InviteUserModelComponent,
    CreateNewSurveyModelComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
