import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoanOfferPageComponent} from './loan-offer-page/loan-offer-page.component'
import {LoanSchemeComponent} from './loan-scheme/loan-scheme.component'

const routes: Routes = [
  {
    path : 'loan-offer-page',
    component : LoanOfferPageComponent
  },
  {
    path : 'loan-scheme',
    component : LoanSchemeComponent
  },{
    path:'', redirectTo : 'loan-scheme', pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
