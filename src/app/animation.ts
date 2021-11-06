
import { animate, style, transition, trigger } from "@angular/animations";



export const animation = trigger("animation",[
    transition("*<=>*",[
        style({opacity:0,transform: 'translateX(10%)'}),
        animate("500ms",style({opacity:1,transform: 'translateX(0)'}))
    ])
])