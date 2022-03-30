import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from './vehicle.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent { //implements OnInit {

  /*constructor() { }

  ngOnInit(): void {
  }*/

  CustomerID:number=10001;
  vehicleDataSubmit(data:any)
  {
    console.log(data);
  }
  VehicleDetails()
  {
    const vehicleData: Vehicle =<Vehicle>{
      //console.log(this.vehicleDataSubmit.value);
      //CarMake: this.vehicleDataSubmit.value.CarMake,
    }
    this._rs.vehicleDataSubmit(vehicleData)
    .subscribe({next:(data:any) =>{
      alert("Successfully Added")
    },
    error:(errorMessage : HttpErrorResponse) => {
      console.log(errorMessage);
      alert("Record Already Exists")
    },
    complete: () =>{}
    
    });

}
