import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import './rxjs-extensions';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule }     from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { HeavyLoaderComponent } from './components/heavy-loader/heavy-loader.component';
import { MyUnlessDirective } from './directives/my-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    HttpTestComponent,
    HeavyLoaderComponent,
    MyUnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
