import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams-galary-view',
  templateUrl: './teams-galary-view.component.html',
  styleUrls: ['./teams-galary-view.component.scss'],
})
export class TeamsGalaryViewComponent implements OnInit {
  teams = [1, 2, 3];

  @Input()
  role: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
