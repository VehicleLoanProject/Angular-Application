import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InUse!:boolean
  userlogin:FormGroup = new FormGroup(
    {
      userId:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      password:new FormControl('',[Validators.pattern("[]"),Validators.required]),
      roleId:new FormControl('',[Validators.pattern("[]"),Validators.required])
    }
  )

  Usercredentials()
  {
     
     console.log(this.userlogin.value)
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
