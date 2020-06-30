import { Component, OnInit } from '@angular/core';

import { FlightPlan } from 'src/app/shared/models/flight-plan';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flightPlan = new FlightPlan();
  submitted : boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.flightPlan)
  }

}
