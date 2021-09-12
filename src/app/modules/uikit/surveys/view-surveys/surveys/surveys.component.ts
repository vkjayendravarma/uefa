import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

  @Input()
  componentTitle: string | undefined;

  @Input()
  textAction: string | undefined;

  @Input()
  enableAddNew: boolean = false;

  surveys = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit(): void {
  }

}
