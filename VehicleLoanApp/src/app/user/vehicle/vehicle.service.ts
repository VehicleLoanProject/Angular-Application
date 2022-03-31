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
    public VehicleDetails(vehicledetails :Vehicle):Observable<ResponseModel> {
       const responseObs: Observable<any>=this._http.post(this.url,vehicledetails);
       return responseObs.pipe(map((resp: any)=><ResponseModel>resp))
    }
    /*public AddVehicle(vehicle:Vehicle[]):Observable<Vehicle>
    {
        const httpOptions ={header: new HttpHeaders({'Content-Type': 'application/json'})};
        return this._http.post<Vehicle>(this.url +'/',vehicle,httpOptions);
    }*/
}