import { trigger, state, style, transition, animate }  from '@angular/core';
import { Color }                                       from './shared/color';

export const AnimationTrigger = trigger('animateNavigation', [
    state(Color.FlatPink, style({
        'background-color': '#F58E7E'
    })),
    state(Color.FlatYellow, style({
        'background-color': '#FDC44F'
    })),
    state(Color.FlatGreen, style({
        'background-color': '#79D1B0'
    })),
    state(Color.FlatBlue, style({
        'background-color': '#5EBABA'
    })),
    transition(Color.FlatPink   + ' => ' + Color.FlatYellow, animate('250ms linear 0')),
    transition(Color.FlatYellow + ' => ' + Color.FlatGreen,  animate('250ms linear 0')),
    transition(Color.FlatGreen  + ' => ' + Color.FlatBlue,   animate('250ms linear 0')),
    transition(Color.FlatBlue   + ' => ' + Color.FlatGreen,  animate('250ms linear 0')),
    transition(Color.FlatGreen  + ' => ' + Color.FlatYellow, animate('250ms linear 0')),
    transition(Color.FlatYellow + ' => ' + Color.FlatPink,   animate('250ms linear 0'))
]);
