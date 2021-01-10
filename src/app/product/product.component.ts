import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from './product-data.service';
import { ProductService } from './product.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private pds: ProductDataService, public ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProductInfo();
  }



  // Get All Product Level Info
  getAllProductInfo = () => {

    this.pds.getProductList().pipe().subscribe((response: any) => {
      this.ps.productList = response;
    },
      (error) => {
        console.log('Service Failed');

      })

  }

  // Get the clicked Book 
  getBook = (data: Product, i: number) => {
    this.ps.currentProduct = data;

    this.router.navigate(['productpage']);
  }
}
