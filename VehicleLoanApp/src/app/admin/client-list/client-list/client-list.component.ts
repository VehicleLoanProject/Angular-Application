import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { applicantDetails } from '../../Models/applicantDetails';
import {ClientListService } from '../client-list.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  applicants?: applicantDetails[];
  errMsg?: string;
  constructor(private _cls:ClientListService, private breakpointObserver: BreakpointObserver , private router:Router) { }

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
    const result:  Observable<applicantDetails[]> = this._cls.getClientList();
    result.subscribe(observerObj);
  }

  onClick(){
    let text = "Are you sure you would like to log out??"
    if(confirm(text) == true){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/clientlist']);
    }
  }


}
