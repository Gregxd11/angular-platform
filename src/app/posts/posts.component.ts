import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {
  title = 'POSTS';
  posts = [];
  fullPost = [];
  showModal: boolean;

  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      for (let post in res) {
        this.posts.push({ id: post, ...res[post].data });
      }
    });
  }

  openModal(id) {
    this.fullPost = this.posts.filter(post => post.id === id);
    this.showModal = true;
  }

  closeModal(event: boolean) {
    this.showModal = event;
  }

  addToGroup(id: string) {
    this.postsService.addToGroup(id);
  }
}
