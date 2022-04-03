import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {LoanSchemeService} from '../services/loan-scheme.service';
import {LoanScheme} from '../models/loan-scheme';
import { Observable, Observer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-scheme',
  templateUrl: './loan-scheme.component.html',
  styleUrls: ['./loan-scheme.component.css']
})
export class LoanSchemeComponent implements OnInit {

  
  name : string = '' ;
  constructor(private _lsservice :LoanSchemeService , private router :Router) { }

  ngOnInit(): void {
    const observerObj : Observer<LoanScheme[]> = {
      next : (data : LoanScheme[]) => {
        console.log(data);
        this.schemes = data;
      },
      error : (errorMessage : HttpErrorResponse)=>{
          console.log(errorMessage);
          this.errMsg = errorMessage.message;
      },
      complete : ()=>{
  
      }
      
    };
    const result:  Observable<LoanScheme[]> = this._lsservice.getSchemes();
    result.subscribe(observerObj);
  }

  schemes? : LoanScheme[];
  errMsg? : string;
   
  @Output() emitEvent : EventEmitter<string> = new EventEmitter<string>(); 

  goBack(){
    this.router.navigate(['/userdashboard']);
  }
}
