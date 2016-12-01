import { trigger, state, style, transition, animate }  from '@angular/core';
import { Color }                                       from '../shared/color';

export const AnimationTrigger = trigger('animateNavigation', [
    state(Color.FlatPink, style({
        'background-color': 'rgba(245, 142, 126, 0.75)'
    })),
    state(Color.FlatYellow, style({
        'background-color': 'rgba(253, 196, 79, 0.75)'
    })),
    state(Color.FlatGreen, style({
        'background-color': 'rgba(121, 209, 176, 0.75)'
    })),
    state(Color.FlatBlue, style({
        'background-color': 'rgba(94, 186, 186, 0.75)'
    })),
    transition(Color.FlatPink   + ' => ' + Color.FlatYellow, animate('250ms linear 0')),
    transition(Color.FlatYellow + ' => ' + Color.FlatGreen,  animate('250ms linear 0')),
    transition(Color.FlatGreen  + ' => ' + Color.FlatBlue,   animate('250ms linear 0')),
    transition(Color.FlatBlue   + ' => ' + Color.FlatGreen,  animate('250ms linear 0')),
    transition(Color.FlatGreen  + ' => ' + Color.FlatYellow, animate('250ms linear 0')),
    transition(Color.FlatYellow + ' => ' + Color.FlatPink,   animate('250ms linear 0'))
]);
