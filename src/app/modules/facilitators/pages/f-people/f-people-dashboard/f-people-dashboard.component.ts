import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-people-dashboard',
  templateUrl: './f-people-dashboard.component.html',
  styleUrls: ['./f-people-dashboard.component.scss'],
})
export class FPeopleDashboardComponent implements OnInit {
  matTabs = ['Players', 'Facilitators', 'Invitees', 'Requests'];
  constructor() {}

  ngOnInit(): void {}
}
