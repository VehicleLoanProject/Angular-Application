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
      UserEmail:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Userpassword:new FormControl('',[Validators.pattern("[]"),Validators.required]),
      UserRole:new FormControl('',[Validators.pattern("[]"),Validators.required])
    }
  )

  Usercredentials()
  {
     
     console.log(this.userlogin.value)
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get  UserEmail()
  {
    return this.userlogin.get("UserEmail")
  }
  get Userpassword()
  {
    return this.userlogin.get("Userpassword")
  }
  get UserRole()
  {
    return this.userlogin.get("UserRole")
  }

}
