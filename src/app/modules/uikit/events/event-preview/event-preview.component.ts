import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uikit-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss'],
})
export class EventPreviewComponent implements OnInit {
  responses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor() {}

  ngOnInit(): void {}
}
