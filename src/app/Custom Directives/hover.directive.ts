import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';
  @HostBinding('style.color') fontColor: string = 'black';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = 'white';
    this.fontColor = 'black';
    this.border = '#000 2px solid';
  }

  @HostListener('mouseleave') mouseOut() {
    this.backgroundColor = 'white';
    this.fontColor = 'black';
    this.border = 'none';
  }
}
