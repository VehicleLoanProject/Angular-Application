import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from "src/app/user/user.module";
import {HomeModule  } from "src/app/home/home.module";
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from "@angular/common/http";
import { ClientListComponent } from './admin/client-list/client-list/client-list.component';
import { RejectedListComponent } from './admin/rejected-list/rejected-list/rejected-list.component';
import { NewApplicationsComponent } from './admin/new-applications/new-application/new-application.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,ClientListComponent,RejectedListComponent,NewApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,AdminModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,HttpClientModule
  ],
  exports:[UserModule,HomeModule,AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
