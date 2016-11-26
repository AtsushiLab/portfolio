import { Component } from '@angular/core';

@Component({
    selector: 'navigation-title',
    template: `
        <div class="navbar-header">
            <a class="navbar-brand page-scroll" href="#first">{{title}}</a>
        </div>
    `
})
export class NavigationTitle {
    private title = "Atsushi Labo";
}
