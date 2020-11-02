import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {
  title = 'POSTS';
  posts = [];
  fullPost = [];
  modalAction: string;
  showModal: boolean;
  successMsg: string;
  showMsg: boolean;

  constructor(private postsService: PostsService, public user: UserService) {}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      for (let post in res) {
        this.posts.push({ id: post, ...res[post].data });
      }
    });
  }

  openModal(id, modalType) {
    this.fullPost = this.posts.filter(post => post.id === id);
    this.showModal = true;
    this.modalAction = modalType;
  }

  closeModal(event: boolean) {
    this.showModal = event;
  }

  addToGroup(id: string) {
    this.postsService.addToGroup(id);
  }

  deletePost(id: string) {
    this.postsService.deletePost(id);
  }

  test() {
    this.user.checkId();
  }
}
