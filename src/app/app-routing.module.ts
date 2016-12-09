import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {NavComponent} from "./components/nav/nav.component";
import {HttpTestComponent} from "./components/http-test/http-test.component";
import {HeavyLoaderComponent} from "./components/heavy-loader/heavy-loader.component";

const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'nav',component:NavComponent },
  { path: 'http-test',component:HttpTestComponent },
  { path: 'user',component: UserComponent },
  { path:'heavy-loader',component:HeavyLoaderComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
