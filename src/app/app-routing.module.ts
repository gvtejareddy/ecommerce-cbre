import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './product/cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';


const routes: Routes = [
  {
    path: '', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path: 'cart', component: CartComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
