import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist : Array<Product> = [];
  
  constructor(private wishlistService: WishlistService){}

  ngOnInit(){
    this.wishlistService.getWishlist().subscribe(
      (data) => (this.wishlist = data),
      (error) => console.log(error)
    );
  }
}
