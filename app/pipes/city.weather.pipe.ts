import {Pipe, PipeTransform} from '@angular/core';
import {Response} from '@angular/http';

import {WeatherService} from '../weather/weather.service';
import {KelvinToCelsius} from '../pipes/celsius.pipe';

import City from '../models/city.interface';

import * as constants from '../constants';

@Pipe({
    name: 'CityWeather',
    pure: false
})

export class CityWeather implements PipeTransform {
    cWeather: any;

    constructor(private weatherService: WeatherService) {
        this.cWeather = {};
    }

    transform(value: string): string {
        if (this.cWeather[value] === undefined) {
            this.cWeather[value] = '';
            this.weatherService
                .getCities(`${constants.GEO_URL}weather?q=${value}&appid=${constants.GEO_API_KEY}`)
                .subscribe(
                    (city: City) => {
                        this.weatherService.weatherStore.push(city);
                        this.cWeather[value] = `${city.name}: ${new KelvinToCelsius().transform(city.main.temp)}°C`;
                    },
                    (error: Response) => {
                        this.cWeather[value] = error.statusText;
                    });
        }

        return this.cWeather[value];
    }
}