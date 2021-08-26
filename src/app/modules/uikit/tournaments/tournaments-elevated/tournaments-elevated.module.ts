import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreTableComponent } from './score/score-table/score-table.component';
import { ScoreMatchModelComponent } from './score/score-match-model/score-match-model.component';
import { PointsTableModelComponent } from './score/points-table-model/points-table-model.component';
import { FinalResultComponent } from './final-result/final-result.component';
import { FixtureListViewComponent } from './tournament-fixtures/fixture-list-view/fixture-list-view.component';
import { GenerateNewFixturesComponent } from './tournament-fixtures/generate-new-fixtures/generate-new-fixtures.component';
import { TournamentFixturesComponent } from './tournament-fixtures/tournament-fixtures.component';
import { TournamentFlowChartModule } from '../../charts/tournament-flow-chart/tournament-flow-chart.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ScoreTableComponent,
    ScoreMatchModelComponent,
    PointsTableModelComponent,
    FinalResultComponent,
    FixtureListViewComponent,
    GenerateNewFixturesComponent,
    TournamentFixturesComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TournamentFlowChartModule,
    MatButtonModule

  ],
  exports: [ScoreTableComponent, FinalResultComponent, TournamentFixturesComponent],
  entryComponents: [
    GenerateNewFixturesComponent,
    ScoreMatchModelComponent,
    PointsTableModelComponent,
  ],
})
export class TournamentsElevatedModule {}
