import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: false
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const el: HTMLImageElement = this.elHost.nativeElement;
    el.src = 'https://via.placeholder.com/150?text=Imagen+no+disponible';
  }

  constructor(private elHost: ElementRef) { }

}
