import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-squad-model',
  templateUrl: './create-squad-model.component.html',
  styleUrls: ['./create-squad-model.component.scss'],
})
export class CreateSquadModelComponent implements OnInit {
  TEAM_PLAYERS = [
    { name: 'St. Xavier', image: 'Img' },
    { name: 'St. Xavier', image: 'Img' },
    { name: 'St. Xavier', image: 'Img' },
    { name: 'St. Xavier', image: 'Img' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
