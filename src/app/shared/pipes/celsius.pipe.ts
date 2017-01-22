import {Pipe, PipeTransform} from '@angular/core';

import {TEMP_DIFFERENCE} from '../../constants';

@Pipe({
    name: 'Celsius'
})

export class Celsius implements PipeTransform {
    transform(value: number): number {
        return Number((value - TEMP_DIFFERENCE).toFixed(2));
    }
}