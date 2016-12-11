import {Pipe, PipeTransform} from '@angular/core';

import {cityCache} from '../constants';

import {KelvinToCelsius} from '../pipes/celsius.pipe';

import City from '../models/city.interface';

@Pipe({
    name: 'CityWeather'
})

export class CityWeather implements PipeTransform {
    cachedNames: City[];
    temp: number;

    transform(value: City): string {
        this.temp = new KelvinToCelsius().transform(value.main.temp);
        this.cachedNames = cityCache.map(n => n.name);

        if (this.cachedNames.indexOf(value.name) === -1) {
            cityCache.push(value);
        }

        return `${value.name}: current temperature is ${this.temp}°C`;
    }
}