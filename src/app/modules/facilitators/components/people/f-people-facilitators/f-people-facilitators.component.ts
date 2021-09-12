import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-people-facilitators',
  templateUrl: './f-people-facilitators.component.html',
  styleUrls: ['./f-people-facilitators.component.scss'],
})
export class FPeopleFacilitatorsComponent implements OnInit {
  FACILITATORS = [
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      role: 'Admin',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      role: 'Admin',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      role: 'Admin',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      role: 'Admin',
      teams: ['Men U15', 'Men U15'],
    },
    {
      name: 'Mo Salah',
      email: 'abc@gmail.com',
      role: 'Admin',
      teams: ['Men U15', 'Men U15'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
