import { Component, Input } from '@angular/core';

@Component({
    selector: 'top',
    template: `
        <div class="top" [attr.data-fixed]="isFixed">
            {{text}}
        </div>
    `
})
export class TopComponent {
    @Input() text: string    = "";
    @Input() isFixed: string = "false";
}
