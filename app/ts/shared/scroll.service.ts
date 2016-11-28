import { Injectable, HostListener, ElementRef } from '@angular/core';
import { Color }                                from './color';

@Injectable()
export class ScrollService {

//    type UpdateStateHandler: () => string;
    private element: ElementRef;
    public updateStateHandler: (str: string) => void;

    constructor(elementRef: ElementRef, updateStateHandler: (str: string) => void)  {
        this.element            = elementRef;
        this.updateStateHandler = updateStateHandler;

        window.addEventListener('scroll', (event) => {

            const scrollTop = this.element.nativeElement.scrollTop;

            if (scrollTop < 300) {
                this.updateStateHandler(Color.Dark);
            }

            if (scrollTop >= 300 && scrollTop < 500) {
                this.updateStateHandler(Color.Navy);
            }

            if (scrollTop >= 500 && scrollTop < 700) {
                this.updateStateHandler(Color.Green);
            }
        });
    }
}
