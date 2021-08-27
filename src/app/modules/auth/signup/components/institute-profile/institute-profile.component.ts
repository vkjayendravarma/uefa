import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-profile',
  templateUrl: './institute-profile.component.html',
  styleUrls: ['./institute-profile.component.scss'],
})
export class InstituteProfileComponent implements OnInit {
  coaches = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {}
}
