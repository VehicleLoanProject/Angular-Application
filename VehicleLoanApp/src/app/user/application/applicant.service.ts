import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map, Observable} from 'rxjs';
import { Application } from "../models/Application";

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
    public addApplicantRecord(userRecord: Application): Observable<ResponseModel> {
        const responseObs: Observable<any> = this._http.post(this.url, userRecord);
        return responseObs.pipe(map((resp: any) => <ResponseModel>resp))
    }
    
}

