import { Component }   from '@angular/core';

@Component({
    selector: 'navigation-bar',
    template: `
        <nav id="topNav" class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <navigation-title></navigation-title>
                <navigation-menu></navigation-menu>
            </div>
        </nav>
    `
})
export class NavigationBar {
}
