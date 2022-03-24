import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerapplicationComponent } from './customerapplication/customerapplication.component';
import { ClientListComponent } from './client-list/client-list/client-list.component';
import { RejectedListComponent } from './rejected-list/rejected-list/rejected-list.component';
import { NewApplicationComponent } from './new-applications/new-application/new-application.component';



@NgModule({
  declarations: [
    CustomerapplicationComponent,
    ClientListComponent,
    RejectedListComponent,
    NewApplicationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
