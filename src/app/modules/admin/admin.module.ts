import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminRouterModule } from './admin-routing.module';
import { UikitModule } from '../uikit/uikit.module';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    EventsComponent,
    HomeComponent,
    UserManagementComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    UikitModule,
    MatButtonModule,    
    MatDialogModule,
    MatTabsModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule
    
  ],
  entryComponents: []
})
export class AdminModule { }
