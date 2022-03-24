import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import {RegistrationService} from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  InUse!:boolean
  registration:FormGroup = new FormGroup(
    {
      UserEmail:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Userpassword:new FormControl('',[Validators.pattern("[]"),Validators.required]),
      UserRole:new FormControl('',[Validators.pattern("[]"),Validators.required])
    }
  )

  Usercredentials()
  {
     
     console.log(this.registration.value);
     this._rs.addUserRecord(this.registration.value);
     
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
