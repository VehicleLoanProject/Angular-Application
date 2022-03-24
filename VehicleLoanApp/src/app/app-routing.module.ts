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
    path: 'registration',
    component:RegistrationComponent
  
  },
  {
    path: 'vehicle',
    component:VehicleComponent
  
  },
  {
    path: 'userdashboard',
    component:UserDashboardComponent
  },
  {
    path:'homepage',component:HomepageComponent
  },
  {
    path:'',redirectTo : 'homepage',pathMatch:"full"
  },
  {
    path:'admindashboard', component:AdmindashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
