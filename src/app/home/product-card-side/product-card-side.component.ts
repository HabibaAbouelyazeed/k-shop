import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-product-card-side',
  templateUrl: './product-card-side.component.html',
  styleUrls: ['./product-card-side.component.css']
})
export class ProductCardSideComponent {
  @Input() productItem !: Product;
  wishlist: Array<Product> = [];
  wishlistIcon: Array<string> = [
    '../../../assets/icons/favorite_border-dark-24px.svg',
    '../../../assets/icons/red-favorite-24.png',
  ];

  constructor(private wishlistService: WishlistService){}

  ngOnInit() {
    this.wishlistService.getWishlist().subscribe(
      (data) => (this.wishlist = data),
      (error) => console.log(error)
    );

    this.productItem.isProductWishlisted =
      this.wishlist.filter((item) => {
        return item.id === this.productItem.id;
      }).length > 0;
  }

  toggleWishlist() {
    this.productItem.isProductWishlisted =
      this.wishlist.filter((item) => {
        return item.id === this.productItem.id;
      }).length > 0;

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
}
