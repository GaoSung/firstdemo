import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Renderer} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Address} from "../../interface/address";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  @Input() name:string;
  age:number;
  address:Address;
  hobbies:Array<string>;

  //@ViewChild('hobby') hobbyInput:ElementRef;

  constructor() {
    this.name='zhangsan';
    this.age=12;
    this.address={street:'怒江北路',city:'普陀区',state:'上海市'};
    this.hobbies=['唱歌','跳舞','吹牛逼','打豆豆'];
  }

  ngOnInit() {
  }

  addHobby(hobby:string){
    this.hobbies.push(hobby);
    //this.hobbyInput.nativeElement.value='';
  }

  deleteHobby(index:number){
    this.hobbies.splice(index,1);
  }

}
