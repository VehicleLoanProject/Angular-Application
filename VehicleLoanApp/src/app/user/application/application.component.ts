import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";
//import { Application } from '../models/application';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { applicantDetails } from 'src/app/admin/Models/applicantDetails';
import { ApplicantService } from './applicant.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  //constructor() { }

  ngOnInit(): void {
  }

  application(data:any)
  {
    console.log(data)
  }
  ApplicantDetails()
  {
    const applicantData:applicantDetails  =<applicantDetails>{
      
    }
    this._rs.ApplicantDetails(applicantData)
    .subscribe({next:(data:any) =>{
      alert("Successfully Added")
    },
    error:(errorMessage : HttpErrorResponse) => {
      console.log(errorMessage);
      alert("Sorry check")
    },
    complete: () =>{}
    
    });
  }
  constructor(private router:Router, private _rs:ApplicantService){}

}
