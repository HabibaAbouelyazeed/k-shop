import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-product-card-side',
  templateUrl: './product-card-side.component.html',
  styleUrls: ['./product-card-side.component.css']
})
export class ProductCardSideComponent {
  @Input() productItem !: Product;
  wishlist: Array<Product> = [];
  cart: Array<Product> = [];
  wishlistIcon: Array<string> = [
    '../../../assets/icons/favorite_border-dark-24px.svg',
    '../../../assets/icons/red-favorite-24.png',
  ];

  constructor(private wishlistService: WishlistService, private cartService: CartService){}

  ngOnInit() {
    this.wishlistService.getWishlist().subscribe(
      (data) => (this.wishlist = data),
      (error) => console.log(error)
    );

    this.cartService.getCart().subscribe(
      (data) => (this.cart = data),
      (error) => console.log(error)
    );

    this.productInWishlist();
    this.productInCart();
  }

  toggleWishlist() {
    this.productInWishlist();

    if (this.productItem.isProductWishlisted) {
      this.wishlist = this.wishlist.filter((item) => {
        return item.id !== this.productItem.id;
      });
      this.productItem.isProductWishlisted = false;

    } else {
      this.wishlist.push(this.productItem);
      this.productItem.isProductWishlisted = true;
    }
    this.wishlistService.setWishlist(this.wishlist);
  }

  AddToCart() {
    this.productInCart()
    if (!this.productItem.isProductInCart) {
      this.productItem.isProductInCart = true;
      this.cart.push(this.productItem);
      this.cartService.setCart(this.cart);
    }
  }

  productInWishlist(){
    this.productItem.isProductWishlisted =
      this.wishlist.filter((item) => {
        return item.id === this.productItem.id;
      }).length > 0;
  }
  productInCart(){
    this.productItem.isProductInCart =
    this.cart.filter((item) => {
      return item.id === this.productItem.id;
    }).length > 0
  }
}
