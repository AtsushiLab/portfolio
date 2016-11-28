import { Component, HostListener, ElementRef, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate }            from '@angular/core';

@Component({
    selector: 'navigation-bar',
    template: `
        <nav id="topNav" class="navigation" [@animateNavigation]="isAnimated">
            <div class="container-fluid">
                <navigation-title></navigation-title>
                <navigation-menu></navigation-menu>
            </div>
        </nav>
    `,
    animations: [
        trigger('animateNavigation', [
            state('false', style({
                'background-color': 'rgba(255, 255, 255, 0)'
            })),
            state('true', style({
                'background-color': 'rgba(23, 23, 23, 0.75)'
            })),
            transition('0 => 1', animate('400ms linear 0')),
            transition('1 => 0', animate('400ms linear 0'))
        ])
    ]
})
export class NavigationBar {

    private element: ElementRef;
    private isAnimated: boolean = false;

    // ElementRef is DOM access
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef) {
        this.element = elementRef;
    }

    @HostListener('document:scroll', ['$event'])
    private onScroll(event: any) {

        const scroll: number = 500;

        if (this.element.nativeElement.offsetParent.scrollTop >= scroll) {
            if (!this.isAnimated) this.changeIsAnimatedState();
        } else {
            if (this.isAnimated) this.changeIsAnimatedState();
        }
    }

    private changeIsAnimatedState() {
        this.isAnimated = !this.isAnimated;
    }

}
