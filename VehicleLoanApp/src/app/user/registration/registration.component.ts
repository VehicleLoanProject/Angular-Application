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
      Password:new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]),
      RoleId:new FormControl('',Validators.required)
   }
  )

  Usercredentials()
  {
     console.log(this.registration.value);
     const userData :UserInfo = <UserInfo>{
       UserId : this.registration.value.UserId,
      Password : this.registration.value.Password,
      RoleId : Number(this.registration.value.RoleId)
      }

     
     this._rs.addUserRecord(userData)
     .subscribe({next: (data: any)=>{
       alert("Successfully Registered !, Please login")
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
  get  userId()
  {
    return this.registration.get("UserId")
  }
  get password()
  {
    return this.registration.get("Password")
  }
  get roleId()
  {
    return this.registration.get("RoleId")
  }

  


}
