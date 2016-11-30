import { BrowserModule }        from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';
import { TopComponent }         from './top';

@NgModule({
    imports: [BrowserModule],
    declarations: [TopComponent],
    exports: [TopComponent],
    bootstrap: [TopComponent]
})
export class TopModule {
}
