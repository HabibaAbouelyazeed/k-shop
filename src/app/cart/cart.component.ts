import { Component } from '@angular/core';
import { Product } from '../shared/interface/product';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../shared/services/wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Array<Product> = [];
  totalPrice: number = 0;
  wishlist: Array<Product> = []

  wishlistIcon: Array<string> = [
    '/assets/icons/favorite_border-24px.svg',
    '/assets/icons/red-favorite-24.png',
  ];
  
  constructor(private cartService : CartService, private wishlistService: WishlistService){}

  // Subscribe to cart and wishlist services
  ngOnInit(){
    this.cartService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );
    this.calcTotalPrice();

    this.wishlistService.getWishlist().subscribe(
      (data) => (this.wishlist = data),
      (error) => console.log(error)
    );
  }

  // Handle removing item from cart
  removeFromCart(id:number){
    this.cart = this.cart.filter((item) => (item.id != id))
    this.cartService.setCart(this.cart);
    this.calcTotalPrice();
  }

  // Calculate total price for items in cart
  calcTotalPrice(){
    let totalTemp = 0;
    this.cart.forEach(item => {
      totalTemp += item.price;
    })
    this.totalPrice = totalTemp;
  }

  // Handle adding or removing item from wishlist
  toggleWishlist(product: Product) {
    product.isProductWishlisted = this.productInWishlist(product);

    if (product.isProductWishlisted) {
      this.wishlist = this.wishlist.filter((item) => {
        return item.id !== product.id;
      });
      product.isProductWishlisted = false;

    } else {
      this.wishlist.push(product);
      product.isProductWishlisted = true;
    }
    this.wishlistService.setWishlist(this.wishlist);
  }

  // Check if item in wishlist for handling card's favorite icon
  productInWishlist(product: Product){
    return this.wishlist.filter((item) => {
        return item.id === product.id;
      }).length > 0;
  }
}
