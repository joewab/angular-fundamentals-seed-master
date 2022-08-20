import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <passenger-count
      [items]="passengers">
    </passenger-count>
    <passenger-detail>
    </passenger-detail>

    <div>
      
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date:
            {{
              passenger.checkedInDate
                ? (passenger.checkedInDate | date: "yMMMMd" | uppercase)
                : "Not checked in"
            }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[]; 
      constructor() {}
      ngOnInit() {
        console.log('ngOnInit');
        
        this.passengers = [
            {
              id: 1,
              fullname: "Stephen",
              checkedIn: true,
              checkedInDate: 1490742000000,
              children: null,
            },
            {
              id: 2,
              fullname: "Rose",
              checkedIn: false,
              checkedInDate: null,
              children: [{name: 'Ted', age: 12}, {name: 'Mary', age: 4}]
            },
            {
              id: 3,
              fullname: "Joe",
              checkedIn: true,
              checkedInDate: 1491606000000,
              children: null, 
            },
            {
              id: 4,
              fullname: "Louise",
              checkedIn: true,
              checkedInDate: 1488412800000,
              children: [{name:'Jessica', age: 7}], 
            },
            {
              id: 5,
              fullname: "Tine",
              checkedIn: false,
              checkedInDate: null,
              children: null,
            },
          ];
      }

}
