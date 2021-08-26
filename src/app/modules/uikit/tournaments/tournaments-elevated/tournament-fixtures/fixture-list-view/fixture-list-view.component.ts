import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture-list-view',
  templateUrl: './fixture-list-view.component.html',
  styleUrls: ['./fixture-list-view.component.scss']
})
export class FixtureListViewComponent implements OnInit {

  matches = [1, 2, 3, 4, 5, 6]
  constructor() { }

  ngOnInit(): void {
  }

}
