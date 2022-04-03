import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { UserInfo } from '../models/UserInfo';
import { HttpErrorResponse } from '@angular/common/http';
import { ForgetpasswordService } from "../services/forgetpassword.service";
import { ConformValidators } from "./confirm.validators";

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
  forgetpassword:FormGroup = new FormGroup({});

  Usercredentials()
  {
     console.log(this.forgetpassword.value);
     const userData :UserInfo = <UserInfo>{
      UserId : this.forgetpassword.value.UserId,
      Password : this.forgetpassword.value.Password,
      ConformPassword:this.forgetpassword.value.ConformPassword,
      RoleId : Number(this.forgetpassword.value.RoleId)
      }

     
     this._rs.addUserRecord(userData)
     .subscribe({next: (data: any)=>{
       alert("New Password Updated !, Please login")
     },
      error: (errorMessage : HttpErrorResponse) => {
      console.log(errorMessage);
      alert("")
    },
      complete: () => {}});
  }


  constructor(private router:Router, private _rs:ForgetpasswordService,private fb:FormBuilder) {

    this.forgetpassword=fb.group(
      {
     
        UserId:new FormControl('',[Validators.email,Validators.required]),
        Password:new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]),
        ConformPassword:new FormControl('',[Validators.required]),
        RoleId:new FormControl('',Validators.required)
     },
     {
       validator:ConformValidators('Password','ConformPassword')
     }
    )
   }

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
  get conformpassword()
  {
    return this.forgetpassword.get("ConformPassword")
  }
}
