/// <reference path='../../typings/index.d.ts' />

import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule }          from '@angular/platform-browser';
import { Component, NgModule, enableProdMode, ElementRef, Input } from '@angular/core';

import { NavigationBarModule } from './navigationBar/navigationBar.module';
import { TopModule }           from './top/top.module';
import { ScrollService }       from './shared/scroll.service';
import { Color }               from './shared/color';
import { AnimationTrigger }    from './app.animation.trigger';

// production mode
enableProdMode();

@Component({
    selector: `wellcome`,
    template: `
    <div [attr.data-color]="backgroundColor">
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
    </div>
    `
})
class Welcome {
    private message = 'Welcome !!';
    @Input() backgroundColor: string = Color.FlatPink;
}

@Component({
    selector: 'body',
    template: `
        <div [@animateNavigation]="backgroundColor">
            <navigation-bar [attr.backgroundColor]="backgroundColor"></navigation-bar>
            <top isFixed="true"></top>
            <top text="Atsushi Lab"></top>
            <wellcome [attr.backgroundColor]="backgroundColor"></wellcome>
        </div>
    `,
    providers: [ScrollService],
    animations: [AnimationTrigger]
})
class AppComponent {

    private element: ElementRef;
    private scrollService: ScrollService;
    private backgroundColor: string = Color.FlatPink;

    constructor(elementRef: ElementRef) {

        this.element       = elementRef; 
        this.scrollService = new ScrollService(this.element, (color: string) => {
            this.backgroundColor = color;
        });
    }
}

@NgModule({
    imports: [BrowserModule, NavigationBarModule, TopModule],
    declarations: [AppComponent, Welcome],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
