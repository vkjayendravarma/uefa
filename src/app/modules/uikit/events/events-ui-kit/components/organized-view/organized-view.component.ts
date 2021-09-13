import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organized-view',
  templateUrl: './organized-view.component.html',
  styleUrls: ['./organized-view.component.scss'],
})
export class OrganizedViewComponent implements OnInit {
  @Input()
  enableCreateNew: boolean = false;

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

  eventsList = ['Current', 'Upcoming', 'Drafts'];
  eventsPlayer = ['Browse', 'Registered Events'];

  constructor() {}

  ngOnInit(): void {}
}
