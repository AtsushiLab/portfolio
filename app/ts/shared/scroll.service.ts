import { Injectable, HostListener, ElementRef } from '@angular/core';

@Injectable()
export class ScrollService {

//    type UpdateStateHandler: () => string;
    private element: ElementRef;
    public updateStateHandler: () => string;

    constructor(elementRef: ElementRef, updateStateHandler: () => string) {
        this.element            = elementRef;
        this.updateStateHandler = updateStateHandler;
    }

    @HostListener('document:scroll', ['$event'])
    private onScroll(event: any) {
    
        const scrollTop = this.element.nativeElement.scrollTop;

        if (scrollTop < 300) {
        }

        if (scrollTop >= 300 && scrollTop < 500) {
        }

        if (scrollTop >= 500 && scrollTop < 700) {
        }

        this.updateStateHandler();
    }   
}
