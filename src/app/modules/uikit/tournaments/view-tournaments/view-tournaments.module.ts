import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsListViewComponent } from './tournaments-list-view/tournaments-list-view.component';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { MatIconModule } from '@angular/material/icon';
import { TournamentsElementComponent } from './tournaments-element/tournaments-element.component';
import { TournamentsTabViewComponent } from './tournaments-tab-view/tournaments-tab-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TournamentsCompletedElementComponent } from './tournaments-completed-element/tournaments-completed-element.component';



@NgModule({
  declarations: [TournamentsListViewComponent, TournamentsElementComponent, TournamentsTabViewComponent, TournamentsCompletedElementComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TagChipsModule,
    MatTabsModule
  ],
  exports: [TournamentsListViewComponent, TournamentsTabViewComponent]
})
export class ViewTournamentsModule { }
