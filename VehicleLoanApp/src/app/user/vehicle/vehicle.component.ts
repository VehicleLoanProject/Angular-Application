import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CustomerID:number=10001;
  vehicleDataSubmit(data:any)
  {
    console.log(data);
  }

}
