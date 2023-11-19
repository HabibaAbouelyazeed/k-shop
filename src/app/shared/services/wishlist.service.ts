import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist = new BehaviorSubject<Product[]>([]);
  constructor() { }

  getWishlist(){
    return this.wishlist.asObservable();
  }

  setWishlist(newWishlist: Product[]){
    this.wishlist.next(newWishlist);
  }
}
