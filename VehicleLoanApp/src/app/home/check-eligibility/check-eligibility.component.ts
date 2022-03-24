import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl } from "@angular/forms";

@Component({
  selector: 'app-check-eligibility',
  templateUrl: './check-eligibility.component.html',
  styleUrls: ['./check-eligibility.component.css']
})
export class CheckEligibilityComponent implements OnInit {

  fage:number=0;
  fincome:number=0;
  femployent:string=" ";
  fplaceOfResidence:string=" "
  fresidenceDuration:number=0;
  result:string=" ";
  orresult:string=" ";
  constructor() { }

  ngOnInit(): void {
  }
  checkeligibility(data:FormData)
  {
    console.log(data);

  }
  checkyoureligibility(data:any)
  {
    //if((this.fage>=18 && this.fage<=65) && this.fincome>=300000 && this.femployent!=="None" && this.fresidenceDuration>=12)
    if(data["fage"]>=18 && data["fage"]<=65 && data["fincome"]>=300000 && data["femployent"]!="None"  && data["fresidenceDuration"]>=12 )
    {
        this.result="Congratulations... You Are Eligible for Car Loan------>[YOU CAN APPLY]";
    }
    else
    this.orresult="Sorry... You Are Not Eligible for Car Loan ----->[HOME]"

  }
}
