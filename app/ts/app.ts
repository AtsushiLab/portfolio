/// <reference path='../../typings/index.d.ts' />

import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic }                      from '@angular/platform-browser-dynamic';
import { BrowserModule }                               from '@angular/platform-browser';
import { Component, NgModule, enableProdMode }         from '@angular/core';
import { HostListener, ElementRef, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate }  from '@angular/core';
import { NavigationBarModule }                         from './navigationBar/navigationBar.module';
impoer { ScrollService }                               from './shared/scroll.service';

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
        <div [@animateNavigation]="backgroundColorNumber">
            <navigation-bar></navigation-bar>
            <wellcome></wellcome>
        </div>
    `,
    providers: [ScrollService],
    animations: [
        trigger('animateNavigation', [
            state('first', style({
                'background-color': '#222222'
            })),
            state('second', style({
                'background-color': '#6fb536'
            })),
            state('third', style({
                'background-color': '#3b5998'
            })),
            transition('first => second', animate('250ms linear 0')),
            transition('second => third', animate('250ms linear 0')),
            transition('third => second', animate('250ms linear 0')),
            transition('second => first', animate('250ms linear 0'))
        ])
    ]
})
class AppComponent {

    private element: ElementRef;
    private backgroundColorNumber: string = 'first';

    private testScrollService: ScrollService;

    constructor(elementRef: ElementRef) {
        this.element = elementRef; 
        this.scrollService = new ScrollService(this.element, {
            console.log('hello, world');
        });
    }

    @HostListener('document:scroll', ['$event'])
    private onScroll(event: any) {
    
        const scrollTop = this.element.nativeElement.scrollTop;

        if (scrollTop < 300) {
            this.backgroundColorNumber = 'first';
        }

        if (scrollTop >= 300 && scrollTop < 500) {
            this.backgroundColorNumber = 'second';
        }

        if (scrollTop >= 500 && scrollTop < 700) {
            this.backgroundColorNumber = 'third';
        }
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
