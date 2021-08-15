import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.scss'],
})
export class RegistrationRequestsComponent implements OnInit {

  regestrations = [1,2,3,4,5,6]
 
  constructor() {}

  ngOnInit(): void {}
}
