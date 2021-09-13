import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-successful',
  templateUrl: './signup-successful.component.html',
  styleUrls: ['./signup-successful.component.scss'],
})
export class SignupSuccessfulComponent implements OnInit {
  selected: any;

  constructor() {
    this.selected = 1;
  }

  ngOnInit(): void {}

  setSelected(option: any) {
    this.selected = option;
    console.log(this.selected);
  }
}
