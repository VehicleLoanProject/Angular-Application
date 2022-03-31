import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    onClick(){
      let text = "Are you sure you would like to log out??"
      if(confirm(text) == true){
        this.router.navigate(['/login']);
      }
      else{
        this.router.navigate(['/admindashboard']);
      }
    }
  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}

}
