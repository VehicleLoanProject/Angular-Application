import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map,Observable } from "rxjs";
import { LoanDetails } from '../models/LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiServer ="http://localhost:/api";
  
  
  constructor(private _http: HttpClient) { }

  public (loandetails:LoanDetails) : Observable<LoanDetails>{
    const loanObs: Observable<any> = this._http.post(this.apiServer, loandetails);
    return loanObs.pipe(map((loan: any)=> <LoanDetails>loan))
}
}

