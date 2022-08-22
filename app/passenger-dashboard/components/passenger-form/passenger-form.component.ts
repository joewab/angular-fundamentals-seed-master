import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input tyoe="text" name="fullname" [ngModel]="detail?.fullname" />
      </div>

      <div>
        Passenger ID:
        <input tyoe="text" name="id" [ngModel]="detail?.id" />
      </div>

      {{ form.value | json }}
    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
}
