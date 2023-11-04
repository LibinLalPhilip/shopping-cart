import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseIn() {
    this.renderer.addClass(
      this.element.nativeElement,
      'ekart-product-highlight'
    );
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.removeClass(
      this.element.nativeElement,
      'ekart-product-highlight'
    );
  }
}
