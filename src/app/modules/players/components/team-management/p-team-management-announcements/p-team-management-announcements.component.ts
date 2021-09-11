import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-team-management-announcements',
  templateUrl: './p-team-management-announcements.component.html',
  styleUrls: ['./p-team-management-announcements.component.scss'],
})
export class PTeamManagementAnnouncementsComponent implements OnInit {
  announcements = [1, 2, 3];
  constructor() {}

  ngOnInit(): void {}
}
