import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getProductList() {

    return this.http.get('https://demo2041410.mockable.io/getBooks');
  }
}
