import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import {applicantDetails} from '../Models/applicantDetails'

@Injectable({
  providedIn: 'root'
})
export class rejectedListService {

  private url = "http://localhost:6436/api/Applicant/fetchrejected";
  

  constructor(private _http:HttpClient){
    console.log("Constructor created..");
  }
  public getRejectedList():Observable<applicantDetails[]>{

    const observableObj : Observable<any> = this._http.get(this.url);

    const convert = map((responseJsonArray : any) => <applicantDetails[]>responseJsonArray);
    const obj : Observable<applicantDetails[]> = observableObj.pipe(convert);
    return obj;
    
  }
}