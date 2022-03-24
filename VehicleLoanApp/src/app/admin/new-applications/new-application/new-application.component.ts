import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NewApplicationsServices } from '../new-application.service';
import {allApplicationDetails} from '../../Models/newApplicationModel'

@Component({
  selector: 'app-new-applications',
  templateUrl: './new-applications.component.html',
  styleUrls: ['./new-applications.component.css']
})
export class NewApplicationsComponent implements OnInit {

  applications?:allApplicationDetails[];
  errMsg?: string;
  constructor(private _nas :NewApplicationsServices) { 
    console.log("new aplication component.");
  }

  ngOnInit(): void {
    const observerObj : Observer<allApplicationDetails[]> = {
      next : (data : allApplicationDetails[]) => {
        console.log(data);
        this.applications = data;
      },
      error : (errorMessage : HttpErrorResponse)=>{
          console.log(errorMessage);
          this.errMsg = errorMessage.message;
      },
      complete : ()=>{
  
      }
      
    };
    const result:  Observable<allApplicationDetails[]> = this._nas.getNewApplication();
    result.subscribe(observerObj);
  }


}
