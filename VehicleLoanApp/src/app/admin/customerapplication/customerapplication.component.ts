import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {allApplicationDetails} from '../Models/newApplicationModel';
import {NewApplicationsServices} from '../new-applications/new-application.service';
import {loanDetails} from '../Models/loan-details';

@Component({
  selector: 'app-customerapplication',
  templateUrl: './customerapplication.component.html',
  styleUrls: ['./customerapplication.component.css']
})
export class CustomerapplicationComponent implements OnInit {

  constructor(private router:Router, private _nserv:NewApplicationsServices, private activatedRoute: ActivatedRoute) { }

  application?: allApplicationDetails;

  loanRecord? : loanDetails;

  id?:number;
  
  setApprove : boolean =false;
  setReject : boolean = false;  

  newapplication:FormGroup = new FormGroup({
      customerId : new FormControl({value :'', disabled : true}),
      appliedOn :new FormControl({value :'', disabled : true}),
    firstName:new FormControl({value :'', disabled : true}),
    lastName : new FormControl({value :'', disabled : true}),
    middleName :new FormControl({value :'', disabled : true}),
    age:new FormControl({value :'', disabled : true}),
    gender :new FormControl({value :'', disabled : true}),
    contactNo :new FormControl({value :'', disabled : true}),
    emailId : new FormControl({value :'', disabled : true}),
    address:new FormControl({value :'', disabled : true}),
    state:new FormControl({value :'', disabled : true}),
    city :new FormControl({value :'', disabled : true}),
    pincode:new FormControl({value :'', disabled : true}),
    typeOfEmployement :new FormControl({value :'', disabled : true}),
    yearlySalary:new FormControl({value :'', disabled : true}),
    existingEmi: new FormControl({value :'', disabled : true}),
    loanAmount :new FormControl({value :'', disabled : true}),
    loanTenure : new FormControl({value :'', disabled : true}),
    interestRate :new FormControl({value :'', disabled : true}),
    carMake : new FormControl({value :'', disabled : true}),
    carModel :new FormControl({value :'', disabled : true}),
    exshowroomPrice:new FormControl({value :'', disabled : true}),
    onroadPrice:new FormControl({value :'', disabled : true})

  });

  ngOnInit(): void {
  
    this.id = this.activatedRoute.snapshot.params['id'];
    
      this._nserv.getNewApplicationById(this.id).subscribe({
        next:(data:allApplicationDetails[])=> {
          this.application = data[0];
        this.fillForm(this.application);
        //console.log(this.application);
      },
        error:(err:HttpErrorResponse)=>console.log(err),
        complete:()=>{}
      });
  }
  fillForm(userData:allApplicationDetails|undefined){
    if(userData != null){  
      this.newapplication.patchValue({
          customerId : userData.customerId,
          appliedOn :userData.appliedOn,
          firstName:userData.firstName,
          lastName : userData.lastName,
          middleName : userData.middleName,
          age:userData.age,
          gender :userData.gender,
          contactNo : userData.contactNo,
          emailId : userData.emailId,
          address : userData.address,
          state:userData.state,
          city :userData.city,
          pincode:userData.pincode,
          typeOfEmployement :userData.typeOfEmployement,
          yearlySalary:userData.yearlySalary,
          existingEmi: userData.existingEmi,
          loanAmount :userData.loanAmount,
          loanTenure : userData.loanAmount,
          interestRate : userData.interestRate,
          carMake : userData.carMake,
          carModel :userData.carModel,
          exshowroomPrice:userData.exshowroomPrice,
          onroadPrice:userData.onroadPrice

        });
        console.log(userData.appliedOn);
      }
        console.log(userData);
  }

  approveLoan(){
    this.setApprove = true;
    this.setReject = true;

    this.loanRecord = {
      loanAmount: this.application?.loanAmount,
      loanTenure: this.application?.loanTenure,
      interestRate : this.application?.interestRate,
      customerId : this.application?.customerId,
      statusId : 2
    }

      
      this._nserv.updateLoanStatus(this.loanRecord).subscribe({next:(data:loanDetails)=>{
        alert("Loan Approved,Loan status updated successfully !");
      },
      error:(err:HttpErrorResponse)=>console.log(err),
      complete:()=>{}

      })
  }
  rejectLoan(){
    this.setApprove = true;
    this.setReject = true;

    this.loanRecord = {
      loanAmount: this.application?.loanAmount,
      loanTenure: this.application?.loanTenure,
      interestRate : this.application?.interestRate,
      customerId : this.application?.customerId,
      statusId : 3
    }
    
      this._nserv.updateLoanStatus(this.loanRecord).subscribe({next:(data:loanDetails)=>{
        alert("Loan Rejected,Loan status updated successfully !");
      },
      error:(err:HttpErrorResponse)=>console.log(err),
      complete:()=>{}

      })
  }

  onClose(){
    this.router.navigate(['/newapplication']);
  }

}
