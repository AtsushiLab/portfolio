import { Injectable, HostListener, ElementRef } from '@angular/core';
import { Color }                                from './color';

declare type ChangeColorHandler = (color: string) => void;

@Injectable()
export class ScrollService {

    private element: ElementRef;
    public changeColorHandler: ChangeColorHandler;
    static readonly CountOfColor: number = 4;

    constructor(elementRef: ElementRef, changeColorHandler: ChangeColorHandler)  {
        this.element            = elementRef;
        this.changeColorHandler = changeColorHandler;

        window.addEventListener('scroll', this.onScroll);
    }

    private onScroll = () => {

        const height    = window.parent.screen.height
        const scrollTop = this.element.nativeElement.ownerDocument.body.scrollTop;

        console.log(this.element);

        if (scrollTop < height / ScrollService.CountOfColor) {
            this.changeColorHandler(Color.FlatPink);
        }

        if (scrollTop >= height / ScrollService.CountOfColor && scrollTop < (height / ScrollService.CountOfColor) * 2) {
            this.changeColorHandler(Color.FlatYellow);
        }

        if (scrollTop >= (height / ScrollService.CountOfColor) * 2 && scrollTop < (height / ScrollService.CountOfColor) * 3) {
            this.changeColorHandler(Color.FlatGreen);
        }

        if (scrollTop >= (height / ScrollService.CountOfColor) * 3 && scrollTop < height) {
            this.changeColorHandler(Color.FlatBlue);
        }
    }

}
