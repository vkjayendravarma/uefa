import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-list-view',
  templateUrl: './stats-list-view.component.html',
  styleUrls: ['./stats-list-view.component.scss']
})
export class StatsListViewComponent implements OnInit {

  @Input()
  componentTitle: string | undefined;

  regestrations = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit(): void {
  }

}
