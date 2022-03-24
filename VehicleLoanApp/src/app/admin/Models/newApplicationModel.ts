export interface allApplicationDetails{
    customerId : number; 
    appliedOn :any;
    firstName:string;
    lastName : string;
    middleName : string;
    age:Number ;
    gender :string;
    contactNo : Number;
    emailId : string;
    address:string;
    state:string;
    city :string;
    pincode:string;
    typeOfEmployement :string;
    yearlySalary:Number;
    existingEmi?: Number;
    loanAmount :number;
    loanTenure : number;
    interestRate : number;
    carMake : string ;
    carModel :string ;
    exshowroomPrice?:number
    onroadPrice?:number;
}