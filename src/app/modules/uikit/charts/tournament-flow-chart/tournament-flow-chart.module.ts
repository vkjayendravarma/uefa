import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesFlowComponent } from './components/matches-flow.component';



@NgModule({
  declarations: [MatchesFlowComponent],
  imports: [
    CommonModule
  ],
  exports: [MatchesFlowComponent]
})
export class TournamentFlowChartModule { }
