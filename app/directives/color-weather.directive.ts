import {
    Directive,
    Input,
    ElementRef,
    Renderer,
    OnInit
} from '@angular/core';

import City from '../models/city.interface';

import {KelvinToCelsius} from '../pipes/celsius.pipe';

@Directive({
    selector: '[colorWeather]'
})

export class ColorWeather implements OnInit {
    @Input('colorWeather') city: City;

    constructor(private el: ElementRef,
                private renderer: Renderer) {
    }

    ngOnInit() {
        const temp: number = new KelvinToCelsius().transform(this.city.main.temp);

        this.renderer.setElementStyle(
            this.el.nativeElement,
            'background-color',
            this.tempRange(temp)
        );
    }

    tempRange(degree: number) {
        let color: string = '';
        const rangeTemp: number[] = [-15, -5, 0, 5, 15, 30];
        const rangeColor: string[] = ['#A9D0ED', '#C8E3F6', '#DEEEFB', '#F4F9FF', '#FFF391', '#FCF046'];

        if (degree <= rangeTemp[0]) {
            color = rangeColor[0];
        }
        else if (degree <= rangeTemp[1]) {
            color = rangeColor[1];
        }
        else if (degree <= rangeTemp[2]) {
            color = rangeColor[2];
        }
        else if (degree <= rangeTemp[3]) {
            color = rangeColor[3];
        }
        else if (degree <= rangeTemp[4]) {
            color = rangeColor[4];
        }
        else if (degree <= rangeTemp[5]) {
            color = rangeColor[5];
        }
        else {
            color = rangeColor[6];
        }

        return color;
    }
}