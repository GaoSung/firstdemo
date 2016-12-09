import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "../interface/post";

@Injectable()
export class UserService {

  private url = "http://localhost:8080/hello";
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
  }

  getHello():Observable<string[]>{
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getPosts():Observable<Post>{
    return this.http.get(this.postsUrl).map(res => res.json());
  }

}
