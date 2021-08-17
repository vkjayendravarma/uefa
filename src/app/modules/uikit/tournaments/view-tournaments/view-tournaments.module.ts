import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsListViewComponent } from './tournaments-list-view/tournaments-list-view.component';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [TournamentsListViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule
  ],
  exports: [TournamentsListViewComponent]
})
export class ViewTournamentsModule { }
