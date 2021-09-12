import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-people-players',
  templateUrl: './f-people-players.component.html',
  styleUrls: ['./f-people-players.component.scss'],
})
export class FPeoplePlayersComponent implements OnInit {
  Players = [
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
