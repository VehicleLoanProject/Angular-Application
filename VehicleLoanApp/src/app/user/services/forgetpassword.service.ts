import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
import {ResponseModel} from '../models/response'

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  private url = "http://localhost:6436/api/UserRegistration/forgetpassward";
  

  constructor(private _http:HttpClient){
    console.log("Constructor created..");
  }
  public addUserRecord(userRecord: UserInfo): Observable<ResponseModel> {
    const responseObs: Observable<any> = this._http.post(this.url, userRecord);
    return responseObs.pipe(map((resp: any) => <ResponseModel>resp))
}
}
