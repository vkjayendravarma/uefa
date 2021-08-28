import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-team-management-members',
  templateUrl: './f-team-management-members.component.html',
  styleUrls: ['./f-team-management-members.component.scss']
})
export class FTeamManagementMembersComponent implements OnInit {


  membersData = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
