import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-team-management-announcements',
  templateUrl: './f-team-management-announcements.component.html',
  styleUrls: ['./f-team-management-announcements.component.scss']
})
export class FTeamManagementAnnouncementsComponent implements OnInit {

  announcements =[1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
