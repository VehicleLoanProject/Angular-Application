import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm} from "@angular/forms";
//import { Application } from '../models/application';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { applicantDetails } from 'src/app/admin/Models/applicantDetails';
import { ApplicantService } from './applicant.service';
import { Application } from '../models/Application';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  CustomerId :Number=0;
  AppliedOn : string='';
  FirstName :string='';
  LastName : string='';
  MiddleName : string='';
  Age:Number =0;
  Gender :string='';
  ContactNo : Number=0;
  EmailId : string='';
  Address:string='';
  State:string='';
  City :string='';
  Pincode:string='';
  TypeOfEmployement :string='';
  YearlySalary:Number=0;
  ExistingEmi?: Number=0;
  UserId :string='';
  InUse!:boolean
  applicantdetails:FormGroup = new FormGroup(
    {
        AppliedOn : new FormControl('',Validators.required),
        FirstName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
        MiddleName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
        LastName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
       Age:new FormControl('',Validators.required),
       Gender:new FormControl('',Validators.required),
       ContactNo:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
       EmailId:new FormControl('',Validators.required),
       Address:new FormControl('',Validators.required),
       State:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
       City:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
       Pincode:new FormControl('',Validators.required),
       TypeOfEmployement:new FormControl('',Validators.required),
       YearlySalary:new FormControl('',Validators.required),
       ExistingEmi:new FormControl('',Validators.required),
       UserId:new FormControl('',Validators.required)
   }
  )
  Usercredentials()
  {
    console.log(this.applicantdetails.value);
    const applicantdata :Application=<Application>
    {
      AppliedOn : this.applicantdetails.value.AppliedOn,
      FirstName : this.applicantdetails.value.FirstName,
      LastName : this.applicantdetails.value.LastName,
      MiddleName : this.applicantdetails.value.MiddleName,
      Age : this.applicantdetails.value.Age,
      Gender : this.applicantdetails.value.Gender,
     ContactNo : this.applicantdetails.value.ContactNo,
     EmailId: this.applicantdetails.value.EmailId,
     Address: this.applicantdetails.value.Address,
     State: this.applicantdetails.value.State,
     City: this.applicantdetails.value.City,
     Pincode: this.applicantdetails.value.Pincode,
     TypeOfEmployement: this.applicantdetails.value.TypeOfEmployement,
     YearlySalary: this.applicantdetails.value.YearlySalary, 
     ExistingEmi: this.applicantdetails.value.ExistingEmi,
     UserId: this.applicantdetails.value.UserId
     //RoleId : Number(this.registration.value.RoleId)
     }

    this._rs.addApplicantRecord(applicantdata)
    .subscribe({next:(data:any)=>{
   alert("Successfully Added our Details")
 },
  error: (errorMessage : HttpErrorResponse) => {
  console.log(errorMessage);
  alert("Details Already exists,Please Check")
},
  complete: () => {}});
}


constructor(private router:Router, private _rs:ApplicantService) { }

ngOnInit(): void {
}
get  appliedOn()
{
  return this.applicantdetails.get("AppliedOn")
}
get firstName()
{
  return this.applicantdetails.get("FirstName")
}
get middleName()
{
  
  return this.applicantdetails.get("MiddleName")
}
 get lastName()
{
  
  return this.applicantdetails.get("LastName")
}
get age()
{
  
  return this.applicantdetails.get("Age")
}
get gender()
{
  
  return this.applicantdetails.get("Gender")
}
get contactNo()
{
  
  return this.applicantdetails.get("ContactNo")
}
get emailId()
{
  
  return this.applicantdetails.get("EmailId")
}
get address()
{
  
  return this.applicantdetails.get("Address")
}
get state()
{
  
  return this.applicantdetails.get("State")
}
get city()
{
  
  return this.applicantdetails.get("City")
}
get pinCode()
{
  return this.applicantdetails.get("Pincode")
}
get typeOfEmployement()
{
  return this.applicantdetails.get("TypeOfEmployement")
}
get yearlySalary()
{
  return this.applicantdetails.get("YearlySalary")
}
get existingEmi()
{
  return this.applicantdetails.get("ExistingEmi")
}
get userId()
{
  return this.applicantdetails.get("UserId")
}
}
  
