import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-surveys-tab-view',
  templateUrl: './surveys-tab-view.component.html',
  styleUrls: ['./surveys-tab-view.component.scss']
})
export class SurveysTabViewComponent implements OnInit {
  @Input()
  componentTitle!: string;

  matTabs = ['Published (13)', 'Closed (3)', 'Archived (0)', 'Drafts (0)']

  constructor() { }

  ngOnInit(): void {
  }

}
