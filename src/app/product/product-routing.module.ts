import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'productpage', component: ProductPageComponent },
      {
        path: 'cart', component: CartComponent
      },
    ]
  },
  {
    path: 'productpage',
    component: ProductPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule {

}
