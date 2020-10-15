import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  title = 'POSTS';
  posts = [];

  constructor(private postsService: PostsService) { }
  ngOnInit(): void {
   this.postsService.getPosts().subscribe(res => this.posts = res);
  }

}
