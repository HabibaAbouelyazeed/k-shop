import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';

@Component({
  selector: 'app-product-card-side',
  templateUrl: './product-card-side.component.html',
  styleUrls: ['./product-card-side.component.css']
})
export class ProductCardSideComponent {
  @Input() productItem !: Product;
}
