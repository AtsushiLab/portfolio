import { BrowserModule }                   from '@angular/platform-browser';
import { Component, NgModule, ElementRef } from '@angular/core';

@Component({
    selector: 'top',
    template: `
        <div class="top">
            Atsushi Lab
        </div>
    `
})
export class TopComponent {
}

@NgModule({
    imports: [BrowserModule],
    declarations: [TopComponent],
    exports: [TopComponent],
    bootstrap: [TopComponent]
})
export class TopModule {
}
