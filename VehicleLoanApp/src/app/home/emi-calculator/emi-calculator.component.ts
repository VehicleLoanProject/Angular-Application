
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";


@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent  {

  constructor() { }
  amount:number=0;
  rate:number=0;
  time:number=0;
  emi:number=0;
  mir:number=0;
  top:number=0;
  bottom:number=0;
  sp:number=0;
  tip:number=0;
  tp:number=0;
 
  // calculatorForm=new FormGroup({
  //   amount:new FormControl('',[Validators.required]),
  //   rate:new FormControl('',[Validators.required]),
  //   time:new FormControl('',[Validators.required])
  // })
  
  emiCalculator(){
    this.mir=(this.rate/100)/12;
    this.top=Math.pow((1+this.mir),this.time);
    this.bottom=this.top-1;
    this.sp=this.top/this.bottom;
    this.emi=((this.amount * this.mir) * this.sp);
    this.tip=this.emi*this.time;
    this.tp=this.tip-this.amount;

  }

}
