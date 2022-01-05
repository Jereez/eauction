import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export interface PeriodicElement {
  name: string;
  amount: number;
  email: string;
  mobile: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {amount: 1, name: 'Hydrogen', email: "ajereez@gmail.com", mobile: 9659071436},
  {amount: 1, name: 'Hydrogen', email: "ajereez@gmail.com", mobile: 9659071436}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eauction';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  displayedColumns: string[] = ['amount', 'name', 'email', 'mobile'];
  dataSource = ELEMENT_DATA;
}
