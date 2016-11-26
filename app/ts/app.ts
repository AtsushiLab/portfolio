/// <reference path='../../typings/index.d.ts' />

import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic }              from '@angular/platform-browser-dynamic';
import { BrowserModule }                       from '@angular/platform-browser';
import { Component, NgModule, enableProdMode } from '@angular/core';

import { NavigationBarModule } from './navigationBar/navigationBar.module';

// production mode
enableProdMode();

@Component({
    selector: `wellcome`,
    template: `<h1>{{message}}</h1>`
})
class Wellcome {
    private message = 'Wellcome to Atsushi Lab !!';
}

@Component({
    selector: 'app',
    template: `
    <navigation-bar></navigation-bar>
    <wellcome></wellcome>
    `
})
class AppComponent {
}

@NgModule({
    imports: [BrowserModule, NavigationBarModule],
    declarations: [AppComponent, Wellcome],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
