import { Component } from '@angular/core';
import { Menu }      from './shared/menu';

@Component({
    selector: 'navigation-menu',
    template: `
        <div class="navigation__menu">
            <ul>
                <li *ngFor="let menu of menus">
                    <a class="navigation__menu__item" href="#{{menu.href}}">{{menu.title}}</a>
                </li>
            </ul>
        </div>   
    `
//    template: `
//        <div class="navbar-collapse collapse" id="bs-navbar">
//            <ul class="nav navbar-nav" *ngFor="let menu of menus">
//                <li>
//                    <a class="page-scroll" href="#{{menu.href}}">{{menu.title}}</a>
//                </li>
//            </ul>
//        </div>
//    `
})
export class NavigationMenu {
    private menus: Menu[] = [
        new Menu("PORTFOLIO", "portfolio"),
        new Menu("TECH", "tech"),
        new Menu("OTHER", "other")
    ];
}
