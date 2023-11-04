import {
  Component,
  Input,
  OnChanges,
  Renderer2,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from '../Modals/product';
import { ProductListComponent } from '../container/product-list/product-list.component';
import { ProductDetailHoverDirective } from '../Custom Directives/product-detail-hover.directive';
import { ProductDetailHoverColorDirective } from '../Custom Directives/product-detail-hover-color.directive';
import { PopupService } from '../services/popup.service';
import { AddToCartService } from '../services/add-to-cart.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductDetailHoverColorDirective],
})
export class ProductDetailComponent implements OnChanges {
  private selectedSizeElement: HTMLElement | null = null;
  size;
  changed;
  selectedcolor;
  clickedElement;
  @Input() productListComp: ProductListComponent;
  prod: Product;
  @Input() isPopupVisible = false;

  prodSize: ProductDetailHoverDirective;
  prodColor: ProductDetailHoverColorDirective;

  popupVisible;
  @Output() popUpVisibleChange = new EventEmitter<boolean>();

  constructor(
    private renderer: Renderer2,
    private popUpService: PopupService,
    private color: AddToCartService,
    private sizeSelected: AddToCartService
  ) {
    // this.selectedcolor = color.getColor;
  }

  @HostListener('click', ['$event']) onClick(appProductDetailHover) {
    // console.log('appProductDetailHover', this.clickedElement);
    // const element = event.target as HTMLElement;
    // if (element.classList.contains('productHover')) {
    //   console.log('Click prevented due to class "productHover"');
    //   return; // Stop further execution of the function
    // } else {
    //   console.log('product detail component (parent)', event);
    //   console.log('Reached here ', event);
    //   this.clickedElement = event.target as HTMLElement;
    //   console.log('This.selected size element', this.selectedSizeElement);
    //   if (this.selectedSizeElement) {
    //     this.renderer.removeClass(this.selectedSizeElement, 'productHover');
    //     console.log(this.selectedSizeElement);
    //   }
    //   if (this.selectedSizeElement !== this.clickedElement) {
    //     this.renderer.addClass(this.clickedElement, 'productHover');
    //     this.selectedSizeElement = this.clickedElement;
    //     console.log('log check here', this.selectedSizeElement);
    //   } else {
    //     this.selectedSizeElement = null;
    //   }
    // }
  }

  ngOnChanges() {
    this.prod = this.productListComp.selectedProduct;
    if (this.prod) {
      this.popupVisible = true;
      this.popUpVisibleChange.emit(this.popupVisible);
    }
  }

  // closing(e: MouseEvent) {
  //   (click)="closing($event)"
  // }

  addToCart() {
    this.selectedcolor = this.color.getColor();
    this.size = this.sizeSelected.getSize();
    console.log('cartcolour', this.selectedcolor);
    console.log('cartsize', this.size);
  }
}
