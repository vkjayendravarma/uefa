import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-people-invitees',
  templateUrl: './f-people-invitees.component.html',
  styleUrls: ['./f-people-invitees.component.scss'],
})
export class FPeopleInviteesComponent implements OnInit {
  Invites = [
    {
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
    {
      email: 'abc@gmail.com',
      teams: ['Men U15', 'Men U15'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
