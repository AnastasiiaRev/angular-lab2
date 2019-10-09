import {Directive, ElementRef, Input, HostListener} from '@angular/core';


@Directive({
    selector: '[appZoom]'
})
export class ZoomDirective {
    @Input()
    appZoom: string;

    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseIn() {
        this.setFontSize(this.appZoom);
        this.setColor('red');
    }

    @HostListener('mouseleave') onMouseOut() {
        this.setFontSize(14);
        this.setColor('black');
    }

    setFontSize(value: number | string): void {
        this.el.nativeElement.style.fontSize = `${value}px`;
    }

    setColor(value: number | string): void {
        this.el.nativeElement.style.color = `${value}`;
    }
}
