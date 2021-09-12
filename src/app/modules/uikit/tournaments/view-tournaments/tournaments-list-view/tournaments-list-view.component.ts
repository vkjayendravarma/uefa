import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-list-view',
  templateUrl: './tournaments-list-view.component.html',
  styleUrls: ['./tournaments-list-view.component.scss']
})
export class TournamentsListViewComponent implements OnInit {
  @Input()
  isCompleted:boolean = false;

  @Input()
  componentTitle: string | undefined;

  @Input()
  enableFilter: boolean = false;

  @Input()
  enableAddNew: boolean = false;

  @Input()
  enableSearch: boolean = false;

  @Input()
  textAction: string | undefined;

  posts = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit(): void {
  }

}
