import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getProduct(productID: string) {
    return this.http.get(environment.url+"weatherforecast/");
  }
  getProductDetail(productID: string) {
    return this.http.get(environment.url+"weatherforecast/");
  }
}
