import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    let text = "Are you sure you would like to log out??"
    if(confirm(text) == true){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/userdashboard']);
    }
  }

}
