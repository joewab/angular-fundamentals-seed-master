import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <div>
        <input 
        type="text" 
        [value]="name"
        (input)="handleChange($event.target.value)">
      </div>

      <template [ngIf]="name.length > 3">
        <div>
          Searching for... {{ name }}
        </div>
      </template>

      <div *ngIf="name.length > 3">
        Searching for... {{ name }}
      </div>
    </div>
  `,
})
export class AppComponent {
  name: string = '';
  handleChange(value: string){
   this.name = value;
   
  }

  constructor() {

  }
}
