import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-offer-page',
  templateUrl: './loan-offer-page.component.html',
  styleUrls: ['./loan-offer-page.component.css']
})
export class LoanOfferPageComponent implements OnInit {

  loanAmount = 1000000;
  interst = .06;
  emi = 2000;
  processingFee = 1000;
  accountType = 'Salary Account';

  constructor() { }

  ngOnInit(): void {
  }

}
