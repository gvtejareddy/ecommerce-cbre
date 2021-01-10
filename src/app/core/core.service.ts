import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../model/Product';

@Injectable()
export class CoreService {

  constructor() { }

  // Maintain Count of the Cart

  private cartCount = 0; private total = 0;
  private productsInCart: any = [];
  private cartCountSub = new Subject<number>();
  public $cartCount = this.cartCountSub.asObservable();


  getProductsInCart = () => {
    console.log(this.productsInCart);
    return this.productsInCart;
  }

  setProductsInCart = (product: Product) => {
    this.productsInCart.push(product);
    this.cartCount = this.cartCount + 1;
  }

  listenToCartCount = () => {
    this.cartCountSub.next(this.cartCount);
  }

  totalCart() {


  }

}
