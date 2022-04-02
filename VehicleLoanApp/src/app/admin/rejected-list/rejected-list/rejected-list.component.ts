import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {applicantDetails} from '../../Models/applicantDetails'
import { rejectedListService } from '../rejected-list.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrls: ['./rejected-list.component.css']
})
export class RejectedListComponent implements OnInit {

  customerId : Number = 0;
  firstName : string = '';
  lastName : string = '';
  applicants?: applicantDetails[];
  errMsg? :string ;
  
  constructor(private  _rls:rejectedListService, private breakpointObserver: BreakpointObserver , private router:Router) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  ngOnInit(): void {
    const observerObj : Observer<applicantDetails[]> = {
      next : (data : applicantDetails[]) => {
        console.log(data);
        this.applicants = data;
      },
      error : (errorMessage : HttpErrorResponse)=>{
          console.log(errorMessage);
          this.errMsg = errorMessage.message;
      },
      complete : ()=>{
  
      }
      
    };
    const result:  Observable<applicantDetails[]> = this._rls.getRejectedList();
    result.subscribe(observerObj);
  
  }
  onClick(){
    let text = "Are you sure you would like to log out??"
    if(confirm(text) == true){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/adminrejectedlist']);
    }
  }

}
