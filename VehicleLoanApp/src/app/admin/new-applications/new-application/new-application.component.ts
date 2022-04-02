import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NewApplicationsServices } from '../new-application.service';
import {allApplicationDetails} from '../../Models/newApplicationModel';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-applications',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationsComponent implements OnInit {

  applications?:allApplicationDetails[];
  errMsg?: string;
  constructor(private _nas :NewApplicationsServices,private breakpointObserver: BreakpointObserver , private router:Router) { 
    console.log("new aplication component.");
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


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

  onClick(){
    let text = "Are you sure you would like to log out??"
    if(confirm(text) == true){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/newapplication']);
    }
  }


}
