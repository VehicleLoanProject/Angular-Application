import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';
import {FormsModule  } from "@angular/forms";
import { AppRoutingModule } from '../app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import {ReactiveFormsModule  } from "@angular/forms";



@NgModule({
  declarations: [
    HomepageComponent,
    EmiCalculatorComponent,
    CheckEligibilityComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule,ReactiveFormsModule
  ],
  exports:[HomepageComponent,EmiCalculatorComponent]
})
export class HomeModule { }
