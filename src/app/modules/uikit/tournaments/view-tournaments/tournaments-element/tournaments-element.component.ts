import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-tournaments-element-new',
  templateUrl: './tournaments-element.component.html',
  styleUrls: ['./tournaments-element.component.scss']
})
export class TournamentsElementComponent implements OnInit {
  posts = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}
