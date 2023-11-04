import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[close]',
})
export class CloseDirective {
  showElement: boolean = false;
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event.target']) toggle(
    targetElement: HTMLElement
  ): void {
    const targetElement1 = event.target as HTMLElement;

    if (targetElement1.className === 'overlay') {
      if (this.element.nativeElement !== event.target) {
        this.clickOutside.emit();
      }
    }
  }
}
