import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListViewComponent } from './posts-list-view/posts-list-view.component';
import { MatIconModule } from '@angular/material/icon';
import { PostElementComponent } from './post-element/post-element.component';
import { PostTabsViewComponent } from './post-tabs-view/post-tabs-view.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [PostsListViewComponent, PostElementComponent, PostTabsViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [PostsListViewComponent, PostTabsViewComponent]
})
export class ViewPostsModule { }
