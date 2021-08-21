import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-tabs-view',
  templateUrl: './post-tabs-view.component.html',
  styleUrls: ['./post-tabs-view.component.scss']
})
export class PostTabsViewComponent implements OnInit {
  @Input()
  componentTitle!: string;

  matTabs = ['All Posts', 'National Association Posts']

  constructor() { }

  ngOnInit(): void {
  }

}
