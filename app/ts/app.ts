/// <reference path='../../typings/index.d.ts' />

import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic }                      from '@angular/platform-browser-dynamic';
import { BrowserModule }                               from '@angular/platform-browser';
import { Component, NgModule, enableProdMode }         from '@angular/core';
import { HostListener, ElementRef, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate }  from '@angular/core';

import { NavigationBarModule } from './navigationBar/navigationBar.module';
import { ScrollService }       from './shared/scroll.service';
import { Color }               from './shared/color';
import { AnimationTrigger }    from './app.animation.trigger';

// production mode
enableProdMode();

@Component({
    selector: `wellcome`,
    template: `
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    <h1>{{message}}</h1>
    `
})
class Welcome {
    private message = 'Welcome !!';
}

@Component({
    selector: 'body',
    template: `
        <div [@animateNavigation]="backgroundColor">
            <navigation-bar></navigation-bar>
            <wellcome></wellcome>
        </div>
    `,
    providers: [ScrollService],
    animations: [AnimationTrigger]
})
class AppComponent {

    private element: ElementRef;
    private backgroundColor: string = Color.Dark;

    private scrollService: ScrollService;

    constructor(elementRef: ElementRef) {
        this.element = elementRef; 
        this.scrollService = new ScrollService(this.element, (str: string) => {
            this.backgroundColor = str;
        });
    }
}

@NgModule({
    imports: [BrowserModule, NavigationBarModule],
    declarations: [AppComponent, Welcome],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
