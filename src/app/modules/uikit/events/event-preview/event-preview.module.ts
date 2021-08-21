import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-preview.component';
import { HeaderModule } from '../../header/header.module';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    EventPreviewComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [EventPreviewComponent]
})
export class EventPreviewModule { }
