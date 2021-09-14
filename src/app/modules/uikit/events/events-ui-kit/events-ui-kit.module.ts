import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizedViewComponent } from './components/organized-view/organized-view.component';
import { SingleCategoryEventsViewComponent } from './components/single-category-events-view/single-category-events-view.component';
import { EventCardElementComponent } from './components/event-card-element/event-card-element.component';
import { TagChipsModule } from '../../global/tag-chips/tag-chips.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EmptyStateModule } from '../../global/empty-state/empty-state.module';



@NgModule({
  declarations: [OrganizedViewComponent, SingleCategoryEventsViewComponent, EventCardElementComponent],
  imports: [
    CommonModule,
    TagChipsModule,
    MatIconModule,
    MatTabsModule,
    EmptyStateModule
  ],
  exports: [OrganizedViewComponent, SingleCategoryEventsViewComponent]
})
export class EventsUiKitModule { }
