import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: [ './post-form.component.scss' ]
})
export class PostFormComponent implements OnInit {
  title = 'NEW POST';

  games = [ 'Rocket League', 'Rainbow Six: Siege', 'CS:GO', 'League of Legends' ];

  players = [ 1, 2, 3, 4 ];

  platforms = [ 'PC', 'Playstation', 'Xbox', 'Switch' ];

  form = new FormGroup({
    username: new FormControl('', Validators.minLength(3)),
    platform: new FormControl(''),
    game: new FormControl(''),
    numOfPlayers: new FormControl('')
  });
  constructor(public post: PostsService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.post.createPost(this.form.value);
  }
}
