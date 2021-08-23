import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-galary-view',
  templateUrl: './teams-galary-view.component.html',
  styleUrls: ['./teams-galary-view.component.scss']
})
export class TeamsGalaryViewComponent implements OnInit {

  teams = [1, 2, 3]
  constructor() { }

  ngOnInit(): void {
  }

}
