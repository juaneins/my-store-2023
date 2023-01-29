import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = '#7286D3';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '#E5E0FF';
  }

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = '#8EA7E9';
  }
}
