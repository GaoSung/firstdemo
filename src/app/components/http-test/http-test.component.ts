import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Post} from "../../interface/post";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
  providers: [UserService]
})
export class HttpTestComponent implements OnInit {

  title:string;
  posts:Post;
  showPosts:boolean;


  constructor(private userService: UserService) {
    this.title = "user works!";
  }

  getHello(){
    this.userService.getHello().subscribe(title => this.title =JSON.stringify(title));
  }

  getPosts(){
    if(this.showPosts == true){
      this.showPosts = false;
    }else{
      this.showPosts = true;
    }
    this.userService.getPosts().subscribe(posts => this.posts=posts);
  }

  ngOnInit() {
  }

}
