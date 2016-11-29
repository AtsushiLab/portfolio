import { trigger, state, style, transition, animate }  from '@angular/core';
import { Color }                                       from './shared/color';

export const AnimationTrigger = trigger('animateNavigation', [
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
]);
