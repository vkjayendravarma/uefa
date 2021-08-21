import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrations-tabview',
  templateUrl: './registrations-tabview.component.html',
  styleUrls: ['./registrations-tabview.component.scss']
})
export class RegistrationsTabviewComponent implements OnInit {

  @Input()
  componentTitle: string | undefined;

  matTabs=['New', 'Changes Requested', 'Rejected']
  regestrations = [1,2,3,4,5,6]
  
  constructor() { }

  ngOnInit(): void {
  }

}
