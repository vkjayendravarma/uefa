import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.scss']
})
export class FinalResultComponent implements OnInit {

  categories = [1, 2, 3, 4, 5, 6]
  constructor() { }

  ngOnInit(): void {
  }

}
