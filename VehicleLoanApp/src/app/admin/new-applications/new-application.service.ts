import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { allApplicationDetails } from '../Models/newApplicationModel';

@Injectable({
  providedIn: 'root'
})
export class NewApplicationsServices {

  private url = "http://localhost:6436/api/Applicant/applicationlist";
  
constructor(private _http:HttpClient){
    console.log("Constructor created..");
  }

  public getNewApplication():Observable<allApplicationDetails[]>{

    const observableObj : Observable<any> = this._http.get(this.url);

    const convert = map((responseJsonArray : any) => <any>responseJsonArray);
    const obj : Observable<allApplicationDetails[]> = observableObj.pipe(convert);
    return obj;
    
  }

  
}
