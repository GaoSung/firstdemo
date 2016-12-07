import { Component } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {HomeService} from "./services/home.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeService]
})
export class AppComponent {
  title = 'app works!';

  constructor(homeService: HomeService) {
    console.log(homeService.getHello());
    homeService.getHello().subscribe(title => this.title =JSON.stringify(title));
    console.log(this.title);
  }
}
