import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';

@Component({
  selector: 'app-latest-products-list',
  templateUrl: './latest-products-list.component.html',
  styleUrls: ['./latest-products-list.component.css']
})
export class LatestProductsListComponent {
  products: Array<Product> = [
    {
      id: 5,
      title: 'تيشيرت-كم طويل-آرت',
      price: 90,
      rating: 3,
      thumbnail: "product-4.png",
      state: 'جديد',
    },
    {
      id: 6,
      title: 'تيشيرت-كم طويل-آرت',
      price: 90,
      priceBeforeDiscount: 150,
      rating: 3,
      thumbnail: "product-5.png",
      state: 'عرض',
    },
    {
      id: 7,
      title: 'تيشيرت-كم طويل-آرت',
      price: 90,
      rating: 3,
      thumbnail: "product-3.png",
    },
  ];
}
