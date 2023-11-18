import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';

@Component({
  selector: 'app-product-card-main',
  templateUrl: './product-card-main.component.html',
  styleUrls: ['./product-card-main.component.css']
})
export class ProductCardMainComponent {
  @Input() productItem !: Product;

  starIcon: Array<string> = [
    "../../../assets/icons/Star-yellow.svg",
    "../../../assets/icons/Star-dimmed.svg"
  ]
}
