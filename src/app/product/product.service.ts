import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public productList: Array<any> = []; // Maintian Product info throughout the module

  public currentProduct: any; // Maintian the Current Product Selected to avoid sending in Query Params


}
