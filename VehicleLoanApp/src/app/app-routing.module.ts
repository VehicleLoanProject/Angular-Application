import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { EmiCalculatorComponent } from "./home/emi-calculator/emi-calculator.component";
import { CheckEligibilityComponent } from "./home/check-eligibility/check-eligibility.component";
import { ApplicationComponent } from './user/application/application.component';
import { CustomerapplicationComponent } from './admin/customerapplication/customerapplication.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { VehicleComponent } from './user/vehicle/vehicle.component';
import { RejectedListComponent } from './admin/rejected-list/rejected-list/rejected-list.component';
import { NewApplicationsComponent } from './admin/new-applications/new-application/new-application.component';
import { ClientListComponent } from './admin/client-list/client-list/client-list.component';
import { LoanDetailsComponent } from './user/loan-details/loan-details.component';
import {AuthGuard} from './cors/auth.guard'
import { AboutusComponent } from "./home/aboutus/aboutus.component";

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
    
  },
  {
    path:'emicalculator',
    component:EmiCalculatorComponent
  },
  {
    path:'eligibilty',
   component:CheckEligibilityComponent
  },
  {
    path:'application',
   component:ApplicationComponent
  },
  {
    path: 'customerApplication',
    component:CustomerapplicationComponent
  
  },
  {
    path: 'clientlist',
    component:ClientListComponent
  
  },
  {
    path: 'loandetails',
    component:LoanDetailsComponent
  
  },
  
  {
    path: 'registration',
    component:RegistrationComponent
  
  },
  {
    path: 'adminrejectedlist',
    component:RejectedListComponent 
  
  },
  {
    path: 'aboutus',
    component:AboutusComponent
  
  },
  {
    path: 'newapplication',
    component:NewApplicationsComponent
  
  },
  {
    path: 'vehicle',
    component:VehicleComponent
  
  },
  {
    path: 'userdashboard',
    component:UserDashboardComponent, canActivate: [AuthGuard]
  },
  {
    path:'homepage',component:HomepageComponent
  },
  {
    path:'',redirectTo : 'homepage',pathMatch:"full"
  },
  {
    path:'admindashboard', component:AdmindashboardComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,/*{enableTracing:true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
