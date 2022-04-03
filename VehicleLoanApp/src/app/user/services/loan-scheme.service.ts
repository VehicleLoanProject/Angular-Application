import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import {LoanScheme} from '../models/loan-scheme'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanSchemeService {

  private url = environment.apiUrlLoanScheme;
  

  constructor(private _http:HttpClient){
    console.log("Constructor created..");
  }

  public getSchemes():Observable<LoanScheme[]>{

    const observableObj : Observable<any> = this._http.get(this.url);

    const convert = map((responseJsonArray : any) => <LoanScheme[]>responseJsonArray);
    const obj : Observable<LoanScheme[]> = observableObj.pipe(convert);
    return obj;
    
  }
  public getSchemeByName(name:string):Observable<LoanScheme[]>{

    const observableObj:Observable<any> = this._http.get(this.url);
    const convert = map(jsonArray => <LoanScheme[]> jsonArray);
    const array:Observable<LoanScheme[]> = observableObj.pipe(convert);

    return array.pipe(map(a=> a.filter(b=>b.schemeName === name)));
  }

  
}
