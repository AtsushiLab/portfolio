/// <reference path='../../typings/index.d.ts' />

import 'reflect-metadata';
import 'zone.js';

import { bootstrap }                 from 'angular2/platform/browser';
import { Component, enableProdMode } from 'angular2/core';
import { CORE_DIRECTIVES }           from 'angular2/common';

enableProdMode();

@Component({
    selector: `wellcome`,
    template: `<h1>Wellcome to Atsushi Lab !!</h1>`
})
class Wellcome {
}

@Component({
    selector: 'my-app',
    template: `<wellcome></wellcome>`,
    directives: [CORE_DIRECTIVES, Wellcome]
})
class MyApp {
}

bootstrap(MyApp);
