import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private message:string;

  constructor() {
    this.message = 'nav hhhhhh';
  }

  ngOnInit() {
  }

}
