import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from './vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  
  CarMake:string='';
CarModel:string='';
ExShowroomPrice:Number=0;
OnRoadPrice:Number=0;
CustomerId=11005;
  
  InUse!:boolean
  vehicledetails:FormGroup = new FormGroup(
    {
     
      CarMake:new FormControl('',[Validators.required]),
      CarModel:new FormControl('',[Validators.required]),
      ExShowroomPrice:new FormControl('',Validators.required),
      OnRoadPrice:new FormControl('',Validators.required)
      //CustomerId:new FormControl('',Validators.required)
   }
  )

  Usercredentials()
  {
    console.log(this.vehicledetails.value);
    const vehicledata :Vehicle = <Vehicle>
    {
      CarMake : this.vehicledetails.value.CarMake,
     CarModel : this.vehicledetails.value.CarModel,
     ExShowroomPrice : this.vehicledetails.value.ExShowroomPrice,
     OnRoadPrice : this.vehicledetails.value.OnRoadPrice,
     CustomerId : Number(this.CustomerId)
     //RoleId : Number(this.registration.value.RoleId)
     }
    
    
    this._rs.addUserRecord(vehicledata)
    .subscribe({next: (data: any)=>{
      alert("Successfully added record")
    },
     error: (errorMessage : HttpErrorResponse) => {
     console.log(errorMessage);
     alert("Record Already exists")
   },
     complete: () => {}});
 }


 constructor(private router:Router, private _rs:VehicleService ,private activatedRoute : ActivatedRoute) { }

 ngOnInit(): void {
  this.CustomerId = this.activatedRoute.snapshot.params['id'];
  console.log(this.CustomerId);
 }

 onClick(){
  this.router.navigate(['/loandetails',this.CustomerId]);
 }

 get  carMake()
 {
   return this.vehicledetails.get("CarMake")
 }
 get carModel()
 {
   return this.vehicledetails.get("CarModel")
 }
 get exShowroomPrice()
 {
   
   return this.vehicledetails.get("ExShowroomPrice")
 }
  get onRoadPrice()
 {
   
   return this.vehicledetails.get("OnRoadPrice")
 }
get customerId()
 {
  return this.vehicledetails.get("CustomerId")
 } 
}