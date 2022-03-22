import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanSchemeComponent } from './loan-scheme/loan-scheme.component';
import { LoanOfferPageComponent } from './loan-offer-page/loan-offer-page.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanSchemeComponent,
    LoanOfferPageComponent,
    ApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
