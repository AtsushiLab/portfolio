import { trigger, state, style, transition, animate }  from '@angular/core';
import { Color }                                       from '../shared/color';

export const AnimationTrigger = trigger('animateNavigation', [
    state(Color.Dark, style({
        'background-color': 'rgba(255, 255, 255, 0)'
    })),
    state(Color.Navy, style({
        'background-color': 'rgba(23, 23, 23, 0.75)'
    })),
    transition(Color.Dark + ' => ' + Color.Navy, animate('400ms linear 0')),
    transition(Color.Navy + ' => ' + Color.Dark, animate('400ms linear 0'))
])
