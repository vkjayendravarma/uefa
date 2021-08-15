import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list-view',
  templateUrl: './posts-list-view.component.html',
  styleUrls: ['./posts-list-view.component.scss']
})
export class PostsListViewComponent implements OnInit {
  posts = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit(): void {
  }

}
