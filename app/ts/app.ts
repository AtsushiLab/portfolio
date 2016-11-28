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
    animations: [
        trigger('animateNavigation', [
            state(Color.Dark, style({
                'background-color': '#222222'
            })),
            state(Color.Navy, style({
                'background-color': '#3b5998'
            })),
            state(Color.Green, style({
                'background-color': '#6fb536'
            })),
            transition(Color.Dark  + ' => ' + Color.Navy,  animate('250ms linear 0')),
            transition(Color.Navy  + ' => ' + Color.Green, animate('250ms linear 0')),
            transition(Color.Green + ' => ' + Color.Navy,  animate('250ms linear 0')),
            transition(Color.Navy  + ' => ' + Color.Dark,  animate('250ms linear 0'))
        ])
    ]
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
