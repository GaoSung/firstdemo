import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HomeService {

  private url = "http://localhost:8080/hello";

  constructor(private http: Http) {
  }

  getHello():Observable<string[]>{
    return this.http.get(this.url)
      .map(res => res.json());
  }

}
