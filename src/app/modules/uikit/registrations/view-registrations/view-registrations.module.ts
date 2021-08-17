import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests.component';
import { MatIconModule } from '@angular/material/icon';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegistrationRequestsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule,
    RouterModule
  ],
  exports: [RegistrationRequestsComponent]
})
export class ViewRegistrationsModule { }
