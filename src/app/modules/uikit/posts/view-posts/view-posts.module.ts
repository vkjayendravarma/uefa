import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListViewComponent } from './posts-list-view/posts-list-view.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PostsListViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [PostsListViewComponent]
})
export class ViewPostsModule { }
