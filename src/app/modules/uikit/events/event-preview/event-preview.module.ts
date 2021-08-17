import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-preview.component';
import { HeaderModule } from '../../header/header.module';



@NgModule({
  declarations: [
    EventPreviewComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [EventPreviewComponent]
})
export class EventPreviewModule { }
