import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerapplicationComponent } from './customerapplication/customerapplication.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerapplicationComponent
    
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[CustomerapplicationComponent]

})
export class AdminModule { }
