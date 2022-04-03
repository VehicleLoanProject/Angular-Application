export interface LoanScheme{

    schemeName  :string;
    maxLoanAmount : number; 
    interestRate :number;
    emi : number;
    processingFee : number;
    accountType : string;
    customerId? : number;
    schemeDescription : string;

}