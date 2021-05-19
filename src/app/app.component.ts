import { Component, VERSION } from '@angular/core';
export class Model {
  id: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';

  phonenumber: string = '';
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  object: Model = new Model();
  objectArray: Model[] = [];
  tid: number = 0;
  constructor() {}

  ngOnInit(): void {}
  OnSubmit() {
    this.objectArray.push(this.object);
    this.object = new Model();
  }
}
