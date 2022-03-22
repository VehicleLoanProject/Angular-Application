import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  application(data:any)
  {
    console.log(data)
  }

}
