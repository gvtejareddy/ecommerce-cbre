import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  constructor(public ps: ProductService, private cs: CoreService) { }

  ngOnInit(): void {
  }

  addToCart = () => {
    this.cs.setProductsInCart(this.ps.currentProduct);
    this.cs.listenToCartCount();
  }
}
