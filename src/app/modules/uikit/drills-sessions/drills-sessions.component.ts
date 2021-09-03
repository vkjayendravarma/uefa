import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-drills-sessions',
  templateUrl: './drills-sessions.component.html',
  styleUrls: ['./drills-sessions.component.scss']
})
export class DrillsSessionsComponent implements OnInit {

  drillsAndSessions= [1, 2, 3]
  constructor() { }

  ngOnInit(): void {
  }

}
