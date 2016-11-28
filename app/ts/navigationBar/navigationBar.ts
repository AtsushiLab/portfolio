import { Component, HostListener, ElementRef, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate }            from '@angular/core';
import { Color }                                                 from '../shared/color';
import { AnimationTrigger }                                      from './navigationBar.animation.trigger';

@Component({
    selector: 'navigation-bar',
    template: `
        <nav id="topNav" class="navigation" [@animateNavigation]="backgroundColor">
            <div class="container-fluid">
                <navigation-title></navigation-title>
                <navigation-menu></navigation-menu>
            </div>
        </nav>
    `,
    animations: [AnimationTrigger]
})
export class NavigationBar {

    private element: ElementRef;
    private backgroundColor: string = Color.Dark;

    // ElementRef is DOM access
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef) {
        this.element = elementRef;
    }

    @HostListener('document:scroll', ['$event'])
    private onScroll(event: any) {

        const scroll: number = 500;

        if (this.element.nativeElement.offsetParent.scrollTop >= scroll) {
            this.backgroundColor = Color.Dark;
        } else {
            this.backgroundColor = Color.Navy;
        }
    }

}
