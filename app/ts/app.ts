/// <reference path='../../typings/index.d.ts' />

import 'reflect-metadata';
import 'zone.js';

import { bootstrap }                 from 'angular2/platform/browser';
import { Component, enableProdMode } from 'angular2/core';
import { CORE_DIRECTIVES }           from 'angular2/common';

import NavigationBar from './navigation/navigationBar';

enableProdMode();

@Component({
    selector: `wellcome`,
    template: `<h1>{{message}}</h1>`
})
class Wellcome {
    private message = 'Wellcome to Atsusi Lab !!';
}

@Component({
    selector: 'app',
    template: `
    <navigation-bar></navigation-bar>
    <wellcome></wellcome>
    `,
    directives: [CORE_DIRECTIVES, Wellcome, NavigationBar]
})
class App {
}

bootstrap(App);
