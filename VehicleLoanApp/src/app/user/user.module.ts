import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { ApplicationComponent } from './application/application.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    ApplicationComponent,
    VehicleComponent,
    RegistrationComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,AppRoutingModule
  ],
  exports:[LoginComponent,ApplicationComponent,RegistrationComponent]
})
export class UserModule { }
