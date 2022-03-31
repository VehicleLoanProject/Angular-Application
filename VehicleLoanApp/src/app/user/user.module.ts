import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { ApplicationComponent } from './application/application.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegistrationService } from "../user/services/registration.service";
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ApplicantService } from './application/applicant.service';


@NgModule({
  declarations: [
    LoginComponent,
    ApplicationComponent,
    VehicleComponent,
    RegistrationComponent,
    UserDashboardComponent,
    LoanDetailsComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,AppRoutingModule
  ],
  exports:[LoginComponent,ApplicationComponent,RegistrationComponent],
  providers:[RegistrationService]
})
export class UserModule { }
