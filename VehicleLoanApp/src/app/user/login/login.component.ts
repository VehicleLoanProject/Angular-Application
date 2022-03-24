import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result:string="";
  orresult:string="";
  InUse!:boolean
  userlogin:FormGroup = new FormGroup(
    {
      userId:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      password:new FormControl('',[Validators.pattern("[]"),Validators.required]),
      roleId:new FormControl('',[Validators.pattern("[]"),Validators.required])
    }
  )

  Usercredentials(data:any)
  {
     
     console.log(this.userlogin.value)
     if(data["roleId"]==100)
     {
       this.result="[GO TO ADMIN-DASHBOARD]"
     }
     else
     this.orresult="[GO TO USER-DASHBOARD]"

  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get  userId()
  {
    return this.userlogin.get("userId")
  }
  get password()
  {
    return this.userlogin.get("password")
  }
  get roleId()
  {
    return this.userlogin.get("roleId")
  }

}
