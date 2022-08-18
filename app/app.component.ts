import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate?: number;
  children: any;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span 
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date: 
            {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  passengers: Passenger[] = [
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
      children: null,
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
      children: null, 
    },
    {
      id: 5,
      fullname: "Tine",
      checkedIn: false,
      children: null,
    },
  ];

  constructor() {}
}
