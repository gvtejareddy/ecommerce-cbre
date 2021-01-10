import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'ecommerce-cbre';
  count = 0;

  constructor(private cs: CoreService, private router: Router) {

  }
  ngOnInit(): void {

    // KEEP LISTENING TO THE CART UPDATES 
    this.cs.$cartCount.pipe().subscribe((cardCount: any) => {

      this.count = cardCount;
    });
  }
  navigateToCart = () => {

    this.router.navigate(['/cart']);

  }

}
