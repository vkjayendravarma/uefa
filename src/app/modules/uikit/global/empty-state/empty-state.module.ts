import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [EmptyStateComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [EmptyStateComponent]
})
export class EmptyStateModule { }
