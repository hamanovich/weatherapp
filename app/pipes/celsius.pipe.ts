import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'KelvinToCelsius'
})

export class KelvinToCelsius implements PipeTransform {
    transform(value: number): number {
        return +(+value - 273).toFixed(2);
    }
}