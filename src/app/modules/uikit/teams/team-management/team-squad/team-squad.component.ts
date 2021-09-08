import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.scss']
})
export class TeamSquadComponent implements OnInit {

  squadMembers = [1,2,3, 4, 5, 6]

  constructor() { }

  ngOnInit(): void {
  }

}
