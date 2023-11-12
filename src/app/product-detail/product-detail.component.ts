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
import { Authorization } from '../services/authorisation.service';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    private sizeSelected: AddToCartService,
    private auth:Authorization,
    private dialog:MatDialog
  ) {
   
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
    // console.log('cartcolour', this.selectedcolor);
    // console.log('cartsize', this.size);

    if (this.auth.isLoggedIn()) {
      // User is logged in, allow adding items to the cart
      // Add your logic to add items to the cart here
      console.log('Item added to cart:', this.selectedcolor, this.size);
    } else {
      // User is not logged in, show a notification to log in

      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: '250px'
      });
      
      // Optionally, you can also navigate to the login page
      // this.router.navigate(['/login']);
    }
  }
}
