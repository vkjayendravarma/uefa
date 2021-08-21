import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsElementComponent } from './stats-element/stats-element.component';
import { StatsListViewComponent } from './stats-list-view/stats-list-view.component';
import { TagChipsModule } from '../global/tag-chips/tag-chips.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    StatsElementComponent,
    StatsListViewComponent
  ],
  imports: [
    CommonModule,
    TagChipsModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    
  ],
  exports: [StatsListViewComponent]
})
export class RegionstatsModule { }
