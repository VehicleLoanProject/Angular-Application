import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map, Observable} from 'rxjs';

import { ResponseModel } from "../models/response";
import { applicantDetails } from "src/app/admin/Models/applicantDetails";
@Injectable({
    providedIn:'root'
})
export class ApplicantService
{
    private url="http://localhost:6436/api/Applicant/AddApplicant";
    constructor(private _http:HttpClient)
    {

    }
    public ApplicantDetails(applicantdetails :applicantDetails):Observable<ResponseModel> {
       const responseObs: Observable<any>=this._http.post(this.url,applicantdetails);
       return responseObs.pipe(map((resp: any)=><ResponseModel>resp))
    }
}