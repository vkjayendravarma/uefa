import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-team-view',
  templateUrl: './f-team-view.component.html',
  styleUrls: ['./f-team-view.component.scss']
})
export class FTeamViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  matTabLinks = [
    {
      label: 'Home',
      path: 'home'
    },
    {
      label: 'Members',
      path: 'members'
    }
  ]
}
