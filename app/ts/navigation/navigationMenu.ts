import { Component } from 'angular2/core';

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
export default class NavigationMenu {
    private menus = [
        { href: "one",   title: "Portfolio" },
        { href: "two",   title: "Tech" },
        { href: "three", title: "Other" },
    ];
}
