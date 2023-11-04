import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';

@Directive({
  selector: '[ProductDetailHoverColor]',
})
export class ProductDetailHoverColorDirective {
  private selectedSizeElement: HTMLElement | null = null;
  color: any;
  changed;
  clickedElement;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private addtoCart: AddToCartService
  ) {}
  @HostListener('mouseover') select() {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    // this.renderer.addClass(this.element.nativeElement, 'productHover');
  }
  @HostListener('mouseleave') mouseOut() {
    // this.renderer.removeClass(this.element.nativeElement, 'productHover');
  }
  @HostListener('click', ['$event']) onClick(event: Event) {
    this.clickedElement = event.target as HTMLElement;
    if (this.clickedElement != this.element.nativeElement) {
      if (this.selectedSizeElement) {
        this.renderer.removeClass(this.selectedSizeElement, 'productHover');
      }
      if (this.selectedSizeElement !== this.clickedElement) {
        this.renderer.addClass(this.clickedElement, 'productHover');
        this.selectedSizeElement = this.clickedElement;
      } else {
        this.selectedSizeElement = null;
      }
    }

    this.color = this.selectedSizeElement.getAttribute('value');
    this.addtoCart.setColor(this.color);
  }
}
