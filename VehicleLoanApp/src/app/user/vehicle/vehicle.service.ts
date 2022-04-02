import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map, Observable} from 'rxjs';
import { Vehicle } from "../models/vehicle";
import { ResponseModel } from "../models/response";
@Injectable({
    providedIn:'root'
})
export class VehicleService
{
    private url="http://localhost:6436/api/vehicle";
    constructor(private _http:HttpClient)
    {

    }
    public addUserRecord(userRecord: Vehicle): Observable<ResponseModel> {
        const responseObs: Observable<any> = this._http.post(this.url, userRecord);
        return responseObs.pipe(map((resp: any) => <ResponseModel>resp))
    }
        
    
}