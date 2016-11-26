import { Component } from '@angular/core';
import { Menu }      from './shared/menu';

@Component({
    selector: 'navigation-menu',
    template: `
        <div class="navbar-collapse collapse" id="bs-navbar">
            <ul class="nav navbar-nav" *ngFor="let menu of menus">
                <li>
                    <a class="page-scroll" href="#{{menu.href}}">{{menu.title}}</a>
                </li>
            </ul>
        </div>
    `
})
export class NavigationMenu {
    private menus: Menu[] = [
        new Menu("Portfolio", "one"),
        new Menu("Tech", "two"),
        new Menu("Other", "three")
    ];
}
