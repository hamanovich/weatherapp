import { Pipe, PipeTransform } from '@angular/core';

import { CELSIUS_KELVIN_DIFFERENCE } from '../../constants';

@Pipe({
    name: 'Celsius'
})

export class Celsius implements PipeTransform {
    transform(value: number): number {
        return Number((value - CELSIUS_KELVIN_DIFFERENCE).toFixed(2));
    }
}
