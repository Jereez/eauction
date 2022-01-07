import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductDetail } from './home.model';
import { HomeService } from './home.service';
const ELEMENT_DATA: Product[] = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eauction';
  emailFormControl = new FormControl('', [Validators.required]);
  displayedColumns: string[] = ['amount', 'name', 'email', 'mobile'];
  arrayList:Product[]=[];
  productDetail:ProductDetail | any;
  dataSource = new MatTableDataSource<Product>(this.arrayList)
  public constructor(private service: HomeService,private snackbar:MatSnackBar) {

  }
  onSubmit() {
    if(this.productDetail.productID){
      this.service.getProduct(this.productDetail.productID).subscribe((data: Product[]|any) => {
        if(data.length>0){
          this.arrayList = data;
          this.dataSource = new MatTableDataSource<any>(this.arrayList)
        }else{
           this.snackbar.open("Product not found","X",{duration:3000});
        }
       }, err => {
         this.snackbar.open(err.message,"X",{duration:3000});
       })
    }else{
      this.snackbar.open("Product ID not found","X",{duration:3000});
    }
  
  }
  productSearch(){
    if(this.emailFormControl.valid){
      this.service.getProductDetail(this.emailFormControl.value).subscribe((data: ProductDetail[]|any) => {
        if(data.length>0){
          this.productDetail = data[0];
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
