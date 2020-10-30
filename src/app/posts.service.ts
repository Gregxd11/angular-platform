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
        this.router.navigate([ 'posts' ]);
      });
  }

  addToGroup(id) {
    this.http.get(`${environment.url}/posts/${id}.json`).subscribe((res: any) => {
      let members = 1;
      if (res.data.members) {
        members = res.data.members + 1;
      }
      this.http
        .put(`${environment.url}/posts/${id}.json`, {
          data: {
            ...res.data,
            numOfPlayers: res.data.numOfPlayers - 1,
            members
          }
        })
        .subscribe(res => window.location.reload());
    });
  }
}
