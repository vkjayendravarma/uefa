import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizedViewComponent } from './components/events/organized-view/organized-view.component';
import { GlobalSearchBarComponent } from './components/global-search-bar/global-search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { EventCardElementComponent } from './elements/event-card-element/event-card-element.component';
import { MatChipsModule } from '@angular/material/chips';
import { TagChipsComponent } from './elements/tag-chips/tag-chips.component';
import { SingleCategoryEventsViewComponent } from './components/events/single-category-events-view/single-category-events-view.component';
import { GlobalActivitiesComponent } from './components/global-activities/global-activities.component';
import { RouterModule } from '@angular/router';
import { CreateNewEventModelComponent } from './models/create-new-event-model/create-new-event-model.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FileUploaderComponent } from './elements/file-uploader/file-uploader.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    OrganizedViewComponent,
    GlobalSearchBarComponent,
    EventCardElementComponent,
    TagChipsComponent,
    SingleCategoryEventsViewComponent,
    GlobalActivitiesComponent,
    CreateNewEventModelComponent,
    CreateEventComponent,
    FileUploaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatChipsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  exports: [
    GlobalSearchBarComponent,
    OrganizedViewComponent,
    SingleCategoryEventsViewComponent,
    GlobalActivitiesComponent,
    CreateEventComponent,
  ],
  entryComponents: [CreateNewEventModelComponent],
})
export class UikitModule {}
