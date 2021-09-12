import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list-view',
  templateUrl: './posts-list-view.component.html',
  styleUrls: ['./posts-list-view.component.scss'],
})
export class PostsListViewComponent implements OnInit {
  posts = [1, 2, 3, 4, 5, 6];

  @Input()
  isCompleted: boolean = false;

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
  constructor() {}

  ngOnInit(): void {}
}
