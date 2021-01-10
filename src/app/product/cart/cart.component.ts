import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cs: CoreService) { }

  public productsInCart: Array<Product> = []; public cartTotal = 0;

  ngOnInit(): void {

    this.productsInCart = this.cs.getProductsInCart();
    this.calculateTotal();
  }


  calculateTotal = () => {
    this.productsInCart.forEach((product: Product) => {
      this.cartTotal = this.cartTotal + product.price;
    });
  }
}
