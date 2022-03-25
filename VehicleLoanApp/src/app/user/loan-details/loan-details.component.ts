import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-loan-details',
    templateUrl: './loan-details.Component.html',
    styleUrls: ['./loan-details.Component.css']
})

export class LoanDetailsComponent implements OnInit{

    
  LoanTenure: any;
    constructor(){}
    ngOnInit(): void {
        
    }
    loandetails(data: any)
    {
        console.log(data)
    }
    selected(event: any){
      console.log(event)
    }
 
}
