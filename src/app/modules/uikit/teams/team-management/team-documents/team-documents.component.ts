import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-documents',
  templateUrl: './team-documents.component.html',
  styleUrls: ['./team-documents.component.scss'],
})
export class TeamDocumentsComponent implements OnInit {
  documents = [1, 2, 3];
  constructor() {}

  ngOnInit(): void {}
}
