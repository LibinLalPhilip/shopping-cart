import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';

@Directive({
  selector: '[appProductDetailHover]',
})
export class ProductDetailHoverDirective {
  private selectedSizeElement: HTMLElement | null = null;
  size;
  clickedElement;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private addToCart: AddToCartService
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

    this.size = +this.clickedElement.innerText.trim();
    this.addToCart.setSize(this.size);
  }
}
