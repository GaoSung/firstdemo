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
  messages:Array<any> = [{'type':'apple','num':'12'},{'type':'orange','num':'16'},{'type':'banana','num':'19'}];

  constructor() {
  }
}
