import {
    Directive,
    Input,
    ElementRef,
    Renderer,
    OnInit
} from '@angular/core';

import City from '../../models/city';

import { Celsius } from '../pipes/celsius.pipe';

@Directive({
    selector: '[colorWeather]'
})

export class ColorWeather implements OnInit {
    @Input('colorWeather') city: City;

    constructor(private el: ElementRef,
        private renderer: Renderer) {
    }

    ngOnInit() {
        const temp: number = new Celsius().transform(this.city.main.temp) || 0;

        this.renderer.setElementStyle(
            this.el.nativeElement,
            'background-color',
            this.tempRange(temp)
        );
    }

    tempRange(temp: number) {
        let tempInd: number = 0;
        const rangeTemp: number[] = [-15, -5, 0, 5, 15, 30];
        const rangeColor: string[] = ['#A9D0ED', '#C8E3F6', '#DEEEFB', '#F4F9FF', '#FFF391', '#FCF046'];

        rangeTemp.some((item: number, index: number, arr: number[]) => {
            if (temp <= item || (index === arr.length - 1 && temp > item)) {
                tempInd = index;
                return true;
            }
        });

        return rangeColor[tempInd];
    }
}
