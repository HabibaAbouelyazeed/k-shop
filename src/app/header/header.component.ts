import { Component } from '@angular/core';
import { Product } from '../shared/interface/product';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cart: Array<Product> = [];

  constructor(private cartService: CartService) {}

  // Subscribe to cart service
  ngOnInit() {
    this.cartService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );

  }
}
