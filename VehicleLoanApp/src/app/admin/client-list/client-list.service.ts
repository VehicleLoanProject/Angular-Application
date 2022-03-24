import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { applicantDetails } from '../Models/applicantDetails';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  private url = "http://localhost:6436/api/Applicant/fetchClient";
  

  constructor(private _http:HttpClient){
    console.log("Constructor created..");
  }
  public getClientList():Observable<applicantDetails[]>{

    const observableObj : Observable<any> = this._http.get(this.url);

    const convert = map((responseJsonArray : any) => <applicantDetails[]>responseJsonArray);
    const obj : Observable<applicantDetails[]> = observableObj.pipe(convert);
    return obj;
    
  }
}