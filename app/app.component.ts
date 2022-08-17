import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <div>
        <button (click)="handleClick(username.value)">
          Get value
        </button>
        <input type="text" #username>
      </div>
      <div>{{ name }}</div>
    </div>
  `,
})
export class AppComponent {
  name: string = 'Joe';
  handleClick(value: string){
   console.log(value);
   
  }

  constructor() {

  }
}
