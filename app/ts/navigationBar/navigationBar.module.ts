import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { CommonModule }             from '@angular/common';

import { NavigationTitle } from './navigationBar.title';
import { NavigationMenu }  from './navigationBar.menu';
import { NavigationBar }   from './navigationBar';

/*
 *
 * NavigationBar Module
 *
 */

@NgModule({
    imports : [BrowserModule, CommonModule],
    declarations: [NavigationBar, NavigationTitle, NavigationMenu],
    exports: [NavigationBar],
    bootstrap: [NavigationBar]
})
export class NavigationBarModule {
}
