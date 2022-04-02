import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { allApplicationDetails } from '../Models/newApplicationModel';
import {loanDetails} from '../Models/loan-details';

@Injectable({
  providedIn: 'root'
})
export class NewApplicationsServices {

  private url = "http://localhost:6436/api/Applicant/applicationlist";
  private urlLoanStatusUpdate = "http://localhost:6436/api/LoanDetails";
  
constructor(private _http:HttpClient){
    console.log("Constructor created..");
  }

  public getNewApplication():Observable<allApplicationDetails[]>{

    const observableObj : Observable<any> = this._http.get(this.url);

    const convert = map((responseJsonArray : any) => <any>responseJsonArray);
    const obj : Observable<allApplicationDetails[]> = observableObj.pipe(convert);
    return obj;
    
  }
  public getNewApplicationById(id?:number):Observable<allApplicationDetails[]>{

    const recordObj:any = this._http.get(this.url);

    const convert = map(( responseJsonArray:any )=><allApplicationDetails[]>responseJsonArray);
    const objList:Observable<allApplicationDetails[]> = recordObj.pipe(convert);
    const obj : Observable<allApplicationDetails[]> = objList.pipe(map(a => a.filter(b => b.customerId == id)));
    return obj;
  }

  updateLoanStatus(record:loanDetails):Observable<loanDetails>{

    const recordObj:any = this._http.put(this.urlLoanStatusUpdate, record);
    const convert = map(( responseJsonArray:any )=><string>responseJsonArray);
    const objList:Observable<loanDetails> = recordObj.pipe(convert);
    
    return objList;
  }


  
}
