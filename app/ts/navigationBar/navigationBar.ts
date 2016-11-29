import { Component, ElementRef } from '@angular/core';
import { Color }                 from '../shared/color';
import { ScrollService }         from '../shared/scroll.service';
import { AnimationTrigger }      from './navigationBar.animation.trigger';

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
    providers: [ScrollService],
    animations: [AnimationTrigger]
})
export class NavigationBar {

    private element: ElementRef;
    private scrollService: ScrollService;
    private backgroundColor: string = Color.Dark;

    // ElementRef is DOM access
    constructor(elementRef: ElementRef) {

        this.element       = elementRef;
        this.scrollService = new ScrollService(this.element, (color: string) => {
            this.backgroundColor = color;
        });

    }
}
