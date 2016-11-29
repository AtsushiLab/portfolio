import { Injectable, HostListener, ElementRef } from '@angular/core';
import { Color }                                from './color';

declare type ChangeColorHandler = (color: string) => void;

@Injectable()
export class ScrollService {

    private element: ElementRef;
    public changeColorHandler: ChangeColorHandler;
    static readonly CountOfColor: number = 3;

    constructor(elementRef: ElementRef, changeColorHandler: ChangeColorHandler)  {
        this.element            = elementRef;
        this.changeColorHandler = changeColorHandler;

        window.addEventListener('scroll', this.onScroll);
    }

    private onScroll = () => {

        const height    = window.parent.screen.height
        console.log(this.element);
        const scrollTop = this.element.nativeElement.ownerDocument.body.scrollTop;

        if (scrollTop < height / ScrollService.CountOfColor) {
            this.changeColorHandler(Color.Dark);
        }

        if (scrollTop >= height / ScrollService.CountOfColor && scrollTop < (height / ScrollService.CountOfColor) * 2) {
            this.changeColorHandler(Color.Navy);
        }

        if (scrollTop >= (height / ScrollService.CountOfColor) * 2 && scrollTop < height) {
            this.changeColorHandler(Color.Green);
        }
    }

}
