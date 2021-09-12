import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-category-events-view',
  templateUrl: './single-category-events-view.component.html',
  styleUrls: ['./single-category-events-view.component.scss'],
})
export class SingleCategoryEventsViewComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
