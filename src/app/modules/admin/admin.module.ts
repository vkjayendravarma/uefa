import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminRouterModule } from './admin-routing.module';
import { UikitModule } from '../uikit/uikit.module';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    EventsComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    UikitModule,
    MatButtonModule,    
    MatDialogModule
    
  ],
  entryComponents: []
})
export class AdminModule { }
