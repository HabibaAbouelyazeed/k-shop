import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products: Array<Product> = [
    {
      id: 1,
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 90,
      priceBeforeDiscount: 150,
      rating: 3,
      thumbnail: "product-1.png",
      state: 'عرض',
    },
    {
      id: 2,
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 90,
      rating: 3,
      thumbnail: "product-2.png",
      state: 'جديد',
    },
    {
      id: 3,
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 90,
      rating: 3,
      thumbnail: "product-7.png",
      state: 'جديد',
    },
    {
      id: 4,
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 90,
      rating: 3,
      thumbnail: "product-6.png",
      state: 'جديد',
    },
  ];
}
