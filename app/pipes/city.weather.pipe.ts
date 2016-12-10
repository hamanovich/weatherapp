import {Pipe, PipeTransform} from '@angular/core';
import {cityCache} from '../constants';
import {KelvinToCelsius} from '../pipes/celsius.pipe';

@Pipe({
    name: 'CityWeather'
})

export class CityWeather implements PipeTransform {
    cachedNames: string[];
    temp: number;

    transform(value: string): string {
        this.temp = new KelvinToCelsius().transform(value['main']['temp']);
        this.cachedNames = cityCache.map(n => n['name']);

        if (this.cachedNames.indexOf(value['name']) === -1) {
            cityCache.push(value);
        }

        return `${value['name']}: current temperature is ${this.temp}°C`;
    }
}