import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-team-view',
  templateUrl: './p-team-view.component.html',
  styleUrls: ['./p-team-view.component.scss'],
})
export class PTeamViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  matTabLinks = [
    {
      label: 'Home',
      path: 'home',
    },

    {
      label: 'Sessions',
      path: 'sessions',
    },
    {
      label: 'Attendance',
      path: 'attendance',
    },
    {
      label: 'Documents',
      path: 'documents',
    },
    {
      label: 'Squads',
      path: 'squads',
    },

    {
      label: 'Announcements',
      path: 'announcements',
    },
  ];
}
