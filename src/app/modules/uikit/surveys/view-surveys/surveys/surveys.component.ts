import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss'],
})
export class SurveysComponent implements OnInit {
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

  surveys = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
