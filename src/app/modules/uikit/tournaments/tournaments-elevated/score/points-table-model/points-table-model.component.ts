import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points-table-model',
  templateUrl: './points-table-model.component.html',
  styleUrls: ['./points-table-model.component.scss']
})
export class PointsTableModelComponent implements OnInit {

  points = [ 1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
