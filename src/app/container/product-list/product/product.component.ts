import { Component, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/Modals/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  selectedProduct!: string;

  @Input()
  product!: Product;
}
