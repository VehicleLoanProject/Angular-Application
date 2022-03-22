import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';
import {FormsModule  } from "@angular/forms";
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HomepageComponent,
    EmiCalculatorComponent,
    CheckEligibilityComponent
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule
  ],
  exports:[HomepageComponent,EmiCalculatorComponent]
})
export class HomeModule { }
