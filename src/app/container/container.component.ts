import {
  Component,
  DoCheck,
  OnChanges,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { PopupService } from '../services/popup.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnChanges {
  name: any = 'John';

  search: string = '';
  showElement = true;
  popUpVisible;

  constructor(
    private renderer: Renderer2,
    private popUpService: PopupService
  ) {}

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  nameChange(event: any) {
    this.name = event.target.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.noScroll();
  }

  searchText(value: string) {
    this.search = value;
  }

  popUp(e: Event) {
    console.log(e);
    return this.popUpService.showPopup();
  }

  popDown() {
    this.popUpService.closePopup();
  }

  ///closing function testing

  @ViewChild(ProductDetailComponent, { static: false }) productDetail:
    | ProductDetailComponent
    | undefined;

  noScroll() {
    const element = document.querySelector('.main');
    this.renderer.addClass(element, 'no-scroll');
  }

  closeProductDetail(): void {
    const element = document.querySelector('.main');
    if (this.productDetail) {
      this.showElement = false;
      this.productListComponent.selectedProduct = null;
    }
    this.renderer.removeClass(element, 'no-scroll');
    this.showElement = true;
    // this.renderer.removeClass(this.element, 'no-scroll');
  }
}
