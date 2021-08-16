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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatchesFlowComponent } from './elements/matches-flow/matches-flow.component';
import { RegistrationRequestsComponent } from './components/registration-requests/registration-requests.component';
import { SurveysComponent } from './components/surveys/surveys.component';
import { PostsListViewComponent } from './components/posts-list-view/posts-list-view.component';
import { TournamentsListViewComponent } from './components/tournaments-list-view/tournaments-list-view.component';
import { EventPreviewComponent } from './pages/event-preview/event-preview.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';


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
    MatchesFlowComponent,
    RegistrationRequestsComponent,
    SurveysComponent,
    PostsListViewComponent,
    TournamentsListViewComponent,
    EventPreviewComponent,
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
    MatSlideToggleModule,
    UiElementsModule
  ],
  exports: [
    GlobalSearchBarComponent,
    OrganizedViewComponent,
    SingleCategoryEventsViewComponent,
    GlobalActivitiesComponent,
    CreateEventComponent,
    MatchesFlowComponent,
    RegistrationRequestsComponent,
    SurveysComponent,
    PostsListViewComponent,
    TournamentsListViewComponent,
    EventPreviewComponent,
  ],
  entryComponents: [CreateNewEventModelComponent],
})
export class UikitModule {}
