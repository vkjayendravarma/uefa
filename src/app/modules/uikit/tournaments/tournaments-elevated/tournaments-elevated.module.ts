import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixturesListViewComponent } from './fixtures/fixtures-list-view/fixtures-list-view.component';
import { ScoreTableComponent } from './score/score-table/score-table.component';
import { ScoreMatchModelComponent } from './score/score-match-model/score-match-model.component';
import { PointsTableModelComponent } from './score/points-table-model/points-table-model.component';
import { FinalResultComponent } from './final-result/final-result.component';



@NgModule({
  declarations: [
    FixturesListViewComponent,
    ScoreTableComponent,
    ScoreMatchModelComponent,
    PointsTableModelComponent,
    FinalResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ScoreTableComponent, FinalResultComponent, FixturesListViewComponent]
})
export class TournamentsElevatedModule { }
