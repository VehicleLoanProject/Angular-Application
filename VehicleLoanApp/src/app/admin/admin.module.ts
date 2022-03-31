import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerapplicationComponent } from './customerapplication/customerapplication.component';



@NgModule({
  declarations: [
    CustomerapplicationComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[CustomerapplicationComponent]

})
export class AdminModule { }
