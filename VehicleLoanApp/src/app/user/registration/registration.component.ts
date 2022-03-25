import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import {RegistrationService} from '../services/registration.service';
import { Router } from '@angular/router';
import { UserInfo } from '../models/UserInfo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  UserId:string='';
Password:string='';
RoleId = 100;
  
  InUse!:boolean
  registration:FormGroup = new FormGroup(
    {
     
      UserId:new FormControl('',[Validators.email,Validators.required]),
      Password:new FormControl('',[Validators.required,Validators.max(10),Validators.min(6)]),
      RoleId:new FormControl('',Validators.required)
   }
  )

  Usercredentials(event:Event)
  {
    event.preventDefault();
     console.log(this.registration.value);
     const userData :UserInfo = <UserInfo>{
       UserId : this.registration.value.UserId,
      Password : this.registration.value.Password,
      RoleId : Number(this.registration.value.RoleId)
      }

     
     this._rs.addUserRecord(userData)
     .subscribe({next: (data: any)=>{
       alert("Successfully Registered !")
     },
      error: (errorMessage : HttpErrorResponse) => {
      console.log(errorMessage);
      alert("Account Already exists,Please login")
    },
      complete: () => {}});
  }


  constructor(private router:Router, private _rs:RegistrationService) { }

  ngOnInit(): void {
  }
  get  UserEmail()
  {
    return this.registration.get("UserEmail")
  }
  get Userpassword()
  {
    return this.registration.get("Userpassword")
  }
  get UserRole()
  {
    return this.registration.get("UserRole")
  }

  


}
