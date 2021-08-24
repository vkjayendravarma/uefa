import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {

  questions = [1, 2, 3]
  constructor() { }

  ngOnInit(): void {
  }

}
