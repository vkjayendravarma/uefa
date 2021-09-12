import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-people-requests',
  templateUrl: './f-people-requests.component.html',
  styleUrls: ['./f-people-requests.component.scss'],
})
export class FPeopleRequestsComponent implements OnInit {
  Requests = [
    {
      email: 'abc@gmail.com',
      role: 'Admin',
    },
    {
      email: 'abc@gmail.com',
      role: 'Admin',
    },
    {
      email: 'abc@gmail.com',
      role: 'Admin',
    },
    {
      email: 'abc@gmail.com',
      role: 'Admin',
    },
    {
      email: 'abc@gmail.com',
      role: 'Admin',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
