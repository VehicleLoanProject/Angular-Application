import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { loanDetails } from "src/app/admin/Models/loan-details";
import {LoanService} from '../services/loan-details.service';

@Component({
    selector: 'app-loan-details',
    templateUrl: './loan-details.Component.html',
    styleUrls: ['./loan-details.Component.css']
})

export class LoanDetailsComponent implements OnInit{

    constructor(private _ldserv :LoanService , private activatedRoute:ActivatedRoute){}

    ngOnInit(): void {
        this.custId = this.activatedRoute.snapshot.params['id'];
    }
    LoanTenure:any;
    LoanScheme:any;
    custId?:number;

    loanDetailsForm : FormGroup = new FormGroup({
      loanAmount : new FormControl(''),
      loanTenure: new FormControl(''),
      loanScheme: new FormControl(''),
      interestRate : new FormControl('')
    });

    submitLoanDetails()
    {
        console.log(this.loanDetailsForm.value)

        const record : loanDetails = <loanDetails>{
          loanAmount:this.loanDetailsForm.value.loanAmount,
          loanTenure: Number(this.loanDetailsForm.value.loanTenure),
          interestRate: Number(this.loanDetailsForm.value.interestRate),
          loanSchemeName: this.loanDetailsForm.value.loanScheme,
          customerId: Number(this.custId),
          statusId: 1
        }
        console.log(record);
        this._ldserv.addLoanDetailsRecord(record).subscribe({
            next:(data:loanDetails)=>{console.log(data)
            alert("Application successfully submitted !!");},
            error:(err:HttpErrorResponse)=>{console.log(err.message)},
            complete:()=>{}
        });

    }
    selected(event: any){
      console.log(event)
      if (this.loanDetailsForm.value.loanScheme == "New Car Loan"){
          this.loanDetailsForm.patchValue({
            interestRate : 8
          });
          
      }
      else if(this.loanDetailsForm.value.loanScheme == "Pre-Owned Car Loan"){
        this.loanDetailsForm.patchValue({
          interestRate : 12
        });
      }
      else if(this.loanDetailsForm.value.loanScheme == "Pre-Owned Car Loan"){
        this.loanDetailsForm.patchValue({
          interestRate : 14
        });
      }
    }
 
}
