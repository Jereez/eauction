import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from './home.service';
export interface PeriodicElement {
  name: string;
  amount: number;
  email: string;
  mobile: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { amount: 1, name: 'Hydrogen', email: "ajereez@gmail.com", mobile: 9659071436 },
  { amount: 1, name: 'Hydrogen', email: "ajereez@gmail.com", mobile: 9659071436 }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eauction';
  emailFormControl = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['amount', 'name', 'email', 'mobile'];
  arrayList:any[]=[];
  dataSource = new MatTableDataSource<any>(this.arrayList)
  public constructor(private service: HomeService,private snackbar:MatSnackBar) {

  }
  onSubmit() {
    if(this.emailFormControl.valid){
      this.service.getProduct(this.emailFormControl.value).subscribe((data: any) => {
        if(data.length>0){
          this.arrayList = ELEMENT_DATA;
          this.dataSource = new MatTableDataSource<any>(this.arrayList)
        }else{
           this.snackbar.open("Product not found","X",{duration:3000});
        }
       }, err => {
         this.snackbar.open(err.message,"X",{duration:3000});
       })
    }else{
      this.emailFormControl.markAsTouched();
    }
  
  }
}
