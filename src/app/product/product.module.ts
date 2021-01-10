import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDataService } from './product-data.service';
import { ProductService } from './product.service';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [ProductComponent, ProductPageComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ], providers: [ProductDataService, ProductService]
})
export class ProductModule { }
