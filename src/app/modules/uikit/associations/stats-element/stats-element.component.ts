import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-element',
  templateUrl: './stats-element.component.html',
  styleUrls: ['./stats-element.component.scss']
})
export class StatsElementComponent implements OnInit {

  status = [
    { name: 'Clubs', number: 23}
  ]
  @Input()
  link: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
