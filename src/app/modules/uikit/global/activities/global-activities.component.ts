import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-activities',
  templateUrl: './global-activities.component.html',
  styleUrls: ['./global-activities.component.scss']
})
export class GlobalActivitiesComponent implements OnInit {

  activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  constructor() { }

  ngOnInit(): void {
  }

}
