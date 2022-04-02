import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserInfo } from '../models/UserInfo';
import { HttpErrorResponse } from '@angular/common/http';
import { ForgetpasswordService } from "../services/forgetpassword.service";
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  UserId:string='';
  Password:string='';
  RoleId = 100;

  InUse!:boolean
  forgetpassword:FormGroup = new FormGroup(
    {
     
      UserId:new FormControl('',[Validators.email,Validators.required]),
      Password:new FormControl('',[Validators.required,Validators.max(10),Validators.min(6)]),
      RoleId:new FormControl('',Validators.required)
   }
  )
  Usercredentials()
  {
     console.log(this.forgetpassword.value);
     const userData :UserInfo = <UserInfo>{
       UserId : this.forgetpassword.value.UserId,
      Password : this.forgetpassword.value.Password,
      RoleId : Number(this.forgetpassword.value.RoleId)
      }

     
     this._rs.addUserRecord(userData)
     .subscribe({next: (data: any)=>{
       alert("New Password Updated !, Please login")
     },
      error: (errorMessage : HttpErrorResponse) => {
      console.log(errorMessage);
      alert("Account Already exists,Please login")
    },
      complete: () => {}});
  }


  constructor(private router:Router, private _rs:ForgetpasswordService) { }

  ngOnInit(): void {
  }
  get  userId()
  {
    return this.forgetpassword.get("UserId")
  }
  get password()
  {
    return this.forgetpassword.get("Password")
  }
  get roleId()
  {
    return this.forgetpassword.get("RoleId")
  }

  
  

  

}
