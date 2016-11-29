import { Component } from '@angular/core';

@Component({
    selector: 'navigation-title',
    template: `
        <div class="navigation__title">
            <a href="#first">{{title}}</a>
        </div>
    `
})
export class NavigationTitle {
    private title = "Atsushi Lab";
}
