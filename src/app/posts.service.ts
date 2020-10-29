import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, public router: Router) {}

  getPosts(): any {
    return this.http.get(`${environment.url}/posts.json`);
  }

  createPost(data): any {
    this.http
      .post(`${environment.url}/posts.json`, {
        data
      })
      .subscribe(res => {
        console.log(res);
        this.router.navigate([ 'posts' ]);
      });
  }
}
