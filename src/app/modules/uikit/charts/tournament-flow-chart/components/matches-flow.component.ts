import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-flow',
  templateUrl: './matches-flow.component.html',
  styleUrls: ['./matches-flow.component.scss'],
})
export class MatchesFlowComponent implements OnInit {
  // Demo Data
  headers = ['First Round', 'Semifinals', 'Finals', 'Winner'];

  matches = {
    first: [
      {
        teama: 'Team 1',
        teamb: 'Team 2',
      },
      {
        teama: 'Team 3',
        teamb: 'Team 4',
      },
      {
        teama: 'Team 5',
        teamb: 'Team 6',
      },
      {
        teama: 'Team 7',
        teamb: 'Team 8',
      },
    ],
    semi: [
      {
        teama: 'Team 2',
        teamb: 'Team 3',
      },
      {
        teama: 'Team 5',
        teamb: 'Team 8',
      },
    ],
    final: [
      {
        teama: 'Team 3',
        teamb: 'Team 8',
      },
    ],
    winner: [
      {
        teama: 'Team 8',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
