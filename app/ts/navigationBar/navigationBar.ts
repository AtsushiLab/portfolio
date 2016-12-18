import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Color }                        from '../shared/color';
import { ScrollService }                from '../shared/scroll.service';
import { AnimationTrigger }             from './navigationBar.animation.trigger';

@Component({
    selector: 'navigation-bar',
    template: `
        <nav id="topNav" class="navigation" [@animateNavigation]="backgroundColor" [attr.data-color]="backgroundColor">
            <div class="container-fluid">
                <navigation-title></navigation-title>
                <navigation-menu></navigation-menu>
            </div>
        </nav>
    `,
    providers: [ScrollService],
    animations: [AnimationTrigger]
})
export class NavigationBar implements OnChanges {

    private element: ElementRef;
    private scrollService: ScrollService;
    @Input() backgroundColor: string = Color.FlatPink;

    // ElementRef is DOM access
    constructor(elementRef: ElementRef) {

        this.element       = elementRef;
        this.scrollService = new ScrollService(this.element, (color: string) => {
            this.backgroundColor = color;
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        console.log(changes['backgroundColor'].currentValue);
    }
}
