import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests.component';
import { MatIconModule } from '@angular/material/icon';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { RouterModule } from '@angular/router';
import { RegistrationsTabviewComponent } from './registrations-tabview/registrations-tabview.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrationsReuestElementComponent } from './registrations-reuest-element/registrations-reuest-element.component';



@NgModule({
  declarations: [RegistrationRequestsComponent, RegistrationsTabviewComponent, RegistrationsReuestElementComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [RegistrationRequestsComponent,RegistrationsTabviewComponent]
})
export class ViewRegistrationsModule { }
