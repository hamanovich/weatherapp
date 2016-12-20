import {Pipe, PipeTransform} from '@angular/core';

import {TEMP_DIFFERENCE} from '../constants';

@Pipe({
    name: 'KelvinToCelsius'
})

export class KelvinToCelsius implements PipeTransform {
    transform(value: number): number {
        return Number((value - TEMP_DIFFERENCE).toFixed(2));
    }
}