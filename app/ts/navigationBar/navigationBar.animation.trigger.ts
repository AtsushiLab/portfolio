import { trigger, state, style, transition, animate }  from '@angular/core';
import { Color }                                       from '../shared/color';

export const AnimationTrigger = trigger('animateNavigation', [
    state(Color.Dark, style({
        'background-color': 'rgba(34, 34, 34, 0.75)'
    })),
    state(Color.Navy, style({
        'background-color': 'rgba(59, 89, 152, 0.75)'
    })),
    state(Color.Green, style({
        'background-color': 'rgba(111, 181, 54, 0.75)'
    })),
    transition(Color.Dark  + ' => ' + Color.Navy,  animate('250ms linear 0')),
    transition(Color.Navy  + ' => ' + Color.Green, animate('250ms linear 0')),
    transition(Color.Green + ' => ' + Color.Navy,  animate('250ms linear 0')),
    transition(Color.Navy  + ' => ' + Color.Dark,  animate('250ms linear 0'))
]);
