import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

import Wind from '../../models/wind';

@Directive({
    selector: '[wind]'
})

export class WindWeather implements OnInit {
    @Input() wind: Wind;

    constructor(private el: ElementRef,
        private renderer: Renderer) {
    }

    ngOnInit() {
        this.renderer.setElementStyle(
            this.el.nativeElement.querySelector('.icon-arrow'),
            'transform',
            'rotate(' + this.wind.deg + 'deg)'
        );
    }
}
