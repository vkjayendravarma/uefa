import { Component, OnInit } from '@angular/core';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';

@Component({
  selector: 'app-admin-new-tournament',
  templateUrl: './admin-new-tournament.component.html',
  styleUrls: ['./admin-new-tournament.component.scss']
})
export class AdminNewTournamentComponent implements OnInit {
  tags: TagsPrototype[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tags = [
      {
        name: 'Draft',
        bgColor: '#D5DFEF',
      },
    ];
  }

}
