import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-team-management-squads',
  templateUrl: './f-team-management-squads.component.html',
  styleUrls: ['./f-team-management-squads.component.scss']
})
export class FTeamManagementSquadsComponent implements OnInit {
  squadsData = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
