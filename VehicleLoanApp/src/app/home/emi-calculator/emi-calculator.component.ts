import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   calculator(data:any) {
    const loanstruct = {
    loanAmount:Number,
    annualInterestrate:Number,
    loanDuration:Number
    };
  // Passing the object as the arguement. The function also returns an object that includes both EMI & Total
  console.log(loanstruct)
  function EMIVal2(data:any){
      let interest=data.annualInterestrate/1200;
      let term = data.loanDuration*12;
      let top = Math.pow((1+interest),term);
      let bottom = top - 1;
      let ratio = top/bottom;
      let EMI= data.loanAmount * interest * ratio;
      let Total = EMI*term;
      const EMIObj = {
        EMI:EMI.toFixed(0),
        Total:Total.toFixed(0)
        };
      return EMIObj
  }
  console.log(EMIVal2(loanstruct));


  return false
}

}
