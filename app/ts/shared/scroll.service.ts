import { Injectable, HostListener, ElementRef } from '@angular/core';
import { Color }                                from './color';

declare type ChangeColorHandler = (color: string) => void;

@Injectable()
export class ScrollService {

    private element: ElementRef;
    public changeColorHandler: ChangeColorHandler;

    constructor(elementRef: ElementRef, changeColorHandler: ChangeColorHandler)  {
        this.element            = elementRef;
        this.changeColorHandler = changeColorHandler;

        window.addEventListener('scroll', (event) => {

            const scrollTop = this.element.nativeElement.scrollTop;

            if (scrollTop < 300) {
                this.changeColorHandler(Color.Dark);
            }

            if (scrollTop >= 300 && scrollTop < 500) {
                this.changeColorHandler(Color.Navy);
            }

            if (scrollTop >= 500 && scrollTop < 700) {
                this.changeColorHandler(Color.Green);
            }
        });
    }
}
