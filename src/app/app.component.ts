import { Component } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private url = 'http://apis.baidu.com/apistore/idservice/id?id=420984198704207896&apikey=1b4a468e948d9ae30727d19005c71c2f';

  constructor(http: Http) {
    http.get(this.url)
      .map(res => res.json())
      .subscribe(people => this.title = JSON.stringify(people));
  }
}
