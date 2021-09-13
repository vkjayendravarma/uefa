import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-tab-view',
  templateUrl: './tournaments-tab-view.component.html',
  styleUrls: ['./tournaments-tab-view.component.scss'],
})
export class TournamentsTabViewComponent implements OnInit {
  @Input()
  isCompleted: boolean = false;

  @Input()
  componentTitle: string | undefined;

  @Input()
  enableFilter: boolean = false;

  @Input()
  enableAddNew: boolean = false;

  @Input()
  enableSearch: boolean = false;

  @Input()
  textAction: string | undefined;

  matTabs = ['Published (13)', 'Closed (3)', 'Archived (0)', 'Drafts (0)'];
  constructor() {}

  ngOnInit(): void {}
}
