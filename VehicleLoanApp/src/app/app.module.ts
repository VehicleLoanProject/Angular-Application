import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from "src/app/user/user.module";
import {HomeModule  } from "src/app/home/home.module";
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,AdminModule
  ],
  exports:[UserModule,HomeModule,AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
