import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';



@Directive({
    selector: '[appAutoGrow]'
})
export class AutoGrowDirective {

constructor(private el: ElementRef , private render: Renderer2 ) {

}

@HostListener( 'focus')  onFocus() {

this.render.setAttribute(this.el.nativeElement, 'size', '50');

}

@HostListener( 'blur')  onBlur() {
    this.render.setAttribute(this.el.nativeElement, 'size', '25');
}

}
