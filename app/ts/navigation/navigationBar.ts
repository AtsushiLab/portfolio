import { Component }   from 'angular2/core';
import NavigationTitle from './navigationTitle';
import NavigationMenu  from './navigationMenu';

@Component({
    selector: 'navigation-bar',
    template: `
        <nav id="topNav" class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <navigation-title></navigation-title>
                <navigation-menu></navigation-menu>
            </div>
        </nav>
    `,
    directives: [NavigationTitle, NavigationMenu]
})
export default class NavigationBar {
}
