import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { ApplicationComponent } from './application/application.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    LoginComponent,
    ApplicationComponent,
    VehicleComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[LoginComponent,ApplicationComponent]
})
export class UserModule { }
