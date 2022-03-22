import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
constructor(private _lb: FormBuilder,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void { 
  }
  loginData(data:any)
  {
    console.log(data);
  }
  
}
