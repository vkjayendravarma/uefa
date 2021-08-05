import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-category-events-view',
  templateUrl: './single-category-events-view.component.html',
  styleUrls: ['./single-category-events-view.component.scss']
})
export class SingleCategoryEventsViewComponent implements OnInit {

  @Input()
  componentTitle!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

