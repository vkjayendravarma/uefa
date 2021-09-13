import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-signup-success',
  templateUrl: './player-signup-success.component.html',
  styleUrls: ['./player-signup-success.component.scss'],
})
export class PlayerSignupSuccessComponent implements OnInit {
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
