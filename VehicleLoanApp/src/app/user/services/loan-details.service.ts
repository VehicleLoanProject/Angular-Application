import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map,Observable } from "rxjs";
import {loanDetails} from '../../admin/Models/loan-details'; 

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiServer ="http://localhost:6436/api/LoanDetails";
  
  
  constructor(private _http: HttpClient) { }

    addLoanDetailsRecord(loandetails:loanDetails) : Observable<loanDetails>{
      const loanObs: Observable<any> = this._http.post(this.apiServer, loandetails);
      return loanObs.pipe(map((loan: any)=> <loanDetails>loan))
    }
}