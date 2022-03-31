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
  custid? : number;
  vehicleDataSubmit(data:any)
  {
    console.log(data);
  }
  VehicleDetails()
  {
    const vehicleData: Vehicle =<Vehicle>{
     
    }
    console.log(vehicleData);
    this._rs.VehicleDetails(vehicleData)
    .subscribe({next:(data:any) =>{
      console.log(data);
      alert("Successfully Added")
    },
    error:(errorMessage : HttpErrorResponse) => {
      console.log(errorMessage);
      //alert("Record Already Exists")
    },
    complete: () =>{}
    
    });

}/*
custid? : number;
vehicleDataSubmit(data:any)
{
  console.log(data.value);
  const vehicleData: Vehicle =<Vehicle>{
      CarMake:data.value.CarMake,
      CarModel:data.value.CarModel,
      ExshowroomPrice: data.value.ExshowroomPrice,
      OnRoadPrice : data.value.OnRoadPrice,
      CustomerId : this.custid
};

  this._rs.VehicleDetails(vehicleData)
  .subscribe({next:(data:any) =>{
  },
  error:(errorMessage : HttpErrorResponse) => {
    console.log(errorMessage);
  },
  complete: () =>{}
  
  });
}*/

constructor(private router:Router, private _rs:VehicleService){}

}
