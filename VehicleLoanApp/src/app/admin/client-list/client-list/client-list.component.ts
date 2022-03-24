import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { applicantDetails } from '../../Models/applicantDetails';
import {ClientListService } from '../client-list.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  applicants?: applicantDetails[];
  errMsg?: string;
  constructor(private _cls:ClientListService ) { }

  ngOnInit(): void {
    const observerObj : Observer<applicantDetails[]> = {
      next : (data : applicantDetails[]) => {
        console.log(data);
        this.applicants = data;
      },
      error : (errorMessage : HttpErrorResponse)=>{
          console.log(errorMessage);
          this.errMsg = errorMessage.message;
      },
      complete : ()=>{
  
      }
      
    };
    const result:  Observable<applicantDetails[]> = this._cls.getClientList();
    result.subscribe(observerObj);
  }

}
