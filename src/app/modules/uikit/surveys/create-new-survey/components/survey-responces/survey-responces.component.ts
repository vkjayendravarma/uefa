import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-survey-responces',
  templateUrl: './survey-responces.component.html',
  styleUrls: ['./survey-responces.component.scss']
})
export class SurveyResponcesComponent implements OnInit {
  responces = [1, 2, 3]
  constructor() { }

  ngOnInit(): void {
  }

}
