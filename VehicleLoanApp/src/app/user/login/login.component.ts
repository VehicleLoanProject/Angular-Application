import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserInfo } from '../models/UserInfo';
import {UserService} from '../services/user.service';
import {TokenInfo} from '../models/TokenInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result:string="";
  orresult:string="";
  InUse!:boolean;
  token?:string;

  userlogin:FormGroup = new FormGroup(
    {
      UserId:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Password:new FormControl('',[Validators.pattern("[]"),Validators.required]),
      RoleId:new FormControl('',[Validators.pattern("[]"),Validators.required])
    }
  )
 

  Usercredentials()
  {
    const userData :UserInfo = <UserInfo>{
      UserId : this.userlogin.value.UserId,
     Password : this.userlogin.value.Password,
     RoleId : Number(this.userlogin.value.RoleId)
     } 
    this.userSvc
      .authenticateUser(userData)
      .subscribe({
        next: (data: TokenInfo) =>{ 
          sessionStorage.setItem('token', data.token)
          this.token = data.token;},
        error: (err) => console.log(err),
        complete: () =>{/* const snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
          if (snapshot.queryParams['returnUrl']) {
            const returnUrl = snapshot.queryParams['returnUrl']
            this.router.navigate([returnUrl])
          } else {
            this.router.navigate(['/userdashboard'])
          }*/
        }
      });
     
     console.log(this.userlogin.value)
     if(userData["RoleId"]==100 && (this.token !=null))
     {
       this.result="[GO TO ADMIN-DASHBOARD]";
     }
     else if(userData["RoleId"]==101 && (this.token !=null))
     {  this.orresult="[GO TO USER-DASHBOARD]";
      }

  }


  constructor(private router:Router,private userSvc:UserService,private  activatedRoute: ActivatedRoute) { 

  }

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
