import { Component, OnInit } from '@angular/core';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';

@Component({
  selector: 'app-admin-monitor-tournament',
  templateUrl: './admin-monitor-tournament.component.html',
  styleUrls: ['./admin-monitor-tournament.component.scss']
})
export class AdminMonitorTournamentComponent implements OnInit {
  tags: TagsPrototype[] = [];

 

  constructor() { }

  ngOnInit(): void {
    this.tags = [
      {
        name: 'Published',
        bgColor: '#F3FFDB',
      },
      {
        name: 'Upcoming',
        bgColor: '#F3FFDB',
      }
    ];
  }
}
