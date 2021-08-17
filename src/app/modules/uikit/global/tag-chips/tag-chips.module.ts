import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagChipsComponent } from './tag-chips.component';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [TagChipsComponent],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [TagChipsComponent]
})
export class TagChipsModule { }
