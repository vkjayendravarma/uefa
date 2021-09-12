import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.scss'],
})
export class RegistrationRequestsComponent implements OnInit {

  @Input()
  componentTitle: string | undefined;

  @Input()
  enableFilter: boolean = false;

  regestrations = [1,2,3,4,5,6]
 
  constructor() {}

  ngOnInit(): void {}
}
