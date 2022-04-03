import { Component, Input, OnInit } from '@angular/core';
import {LoanSchemeService} from '../services/loan-scheme.service';
import {LoanScheme} from '../models/loan-scheme';
import { Observable, Observer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-loan-offer-page',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferPageComponent implements OnInit {

  loanAmount = Number;
  interst = Number;
  emi = Number;
  processingFee = Number;
  accountType = 'Salary Account';

  schemes? : LoanScheme[];
  errMsg? : string;
  schemeName : string = '';
  data? : LoanScheme[];
  
  constructor(private _lschemeservice : LoanSchemeService,private activatedroute: ActivatedRoute,private route:Router) { 
    //this.activatedroute.params.subscribe(data=>
      //this.schemeName = data['value']);
  }

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
    const result:  Observable<LoanScheme[]> = this._lschemeservice.getSchemes();
    result.subscribe(observerObj);

    const name = this.activatedroute.snapshot.params['schemeName'];
    const obj: Observable<LoanScheme[]> = this._lschemeservice.getSchemeByName(name);
    obj.subscribe({
      next:((data)=>{
        this.data = data;
        console.log(data);
      })
    })
  }
 
goBack(){
  this.route.navigate(['/loan-scheme']);
}
  
}
